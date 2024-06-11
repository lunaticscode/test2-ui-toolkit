import { useMemo } from "react";
import { PopoverOrientations, PopoverRootProps } from "../Root";

const usePosition = (
  anchor: PopoverRootProps["anchor"],
  orientation: PopoverOrientations = "bottom-left"
) => {
  const rect = anchor?.current?.getBoundingClientRect();

  const [x, y] = useMemo(() => {
    if (orientation === "bottom-left") {
      const positionX = rect?.left || 0;
      const positionY = (rect?.top || 0) + (rect?.height || 0);
      return [positionX, positionY];
    }
    return [rect?.x || 0, rect?.y || 0];
  }, [rect, orientation]);
  return { x, y };
};
export default usePosition;
