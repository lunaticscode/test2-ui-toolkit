import { useEffect, useState } from "react";
import { usePopoverContext } from "../Root";

const usePosition = () => {
  const { anchor, position = "bottom-left" } = usePopoverContext();

  const [positionXY, setPositionXY] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const getPosition = () => {
    const rect = anchor?.current?.getBoundingClientRect();
    if (position === "bottom-left") {
      // console.log({ x: rect?.x || 0, y: (rect?.height || 0) + (rect?.y || 0) });
      setPositionXY({
        x: rect?.x || 0,
        y: (rect?.height || 0) + (rect?.y || 0),
      });
    }
  };
  useEffect(() => {
    if (anchor?.current) {
      getPosition();
    }
  }, [anchor]);
  return {
    x: positionXY.x,
    y: positionXY.y,
  };
};

export default usePosition;
