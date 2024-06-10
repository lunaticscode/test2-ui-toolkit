import { createPortal } from "react-dom";
import { usePopoverContext } from "./Root";
import { FC, PropsWithChildren, useEffect, useRef } from "react";
import usePosition from "./hooks/usePosition";
import useOutsideClick from "./hooks/useOutsideClick";

interface PopoverPortalProps extends PropsWithChildren {}
const Portal: FC<PopoverPortalProps> = ({ children }) => {
  const { setTargetRef, isOutside } = useOutsideClick();

  const { x, y } = usePosition();
  const {
    anchor,
    open: openContext,
    setOpen: setOpenContext,
  } = usePopoverContext();
  const popoverContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTargetRef(popoverContainerRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popoverContainerRef.current]);
  const PortalElement = createPortal(
    <div
      ref={popoverContainerRef}
      style={{ position: "absolute", top: y, left: x }}
    >
      {children}
    </div>,
    (anchor?.current || document.body) as Element
  );

  useEffect(() => {
    setOpenContext?.(!isOutside);
  }, [isOutside]);

  return openContext ? PortalElement : null;
};
export default Portal;
