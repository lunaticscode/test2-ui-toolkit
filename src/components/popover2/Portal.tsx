import { FC, PropsWithChildren } from "react";
import { usePopoverContext } from "./Root";
import usePosition from "./hooks/usePosition";
import { createPortal } from "react-dom";

interface PopoverPortalProps extends PropsWithChildren {}
const Portal: FC<PopoverPortalProps> = (props) => {
  const { children } = props;
  const { anchor, orientation } = usePopoverContext();
  console.log(anchor);
  const { x, y } = usePosition(anchor, orientation);
  console.log(x, y);

  const PortalElement = createPortal(
    <div
      //   ref={popoverContainerRef}
      style={{ position: "absolute", top: y, left: x }}
    >
      {children}
    </div>,
    (anchor?.current || document.body) as Element
  );
  return PortalElement;
};
export default Portal;
