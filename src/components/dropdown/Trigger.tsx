import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { useDropdownContext } from "./Root";

interface DropdownTriggerProps extends PropsWithChildren {}
const Trigger: FC<DropdownTriggerProps> = (props) => {
  const { children } = props;
  const triggerRef = useRef<HTMLDivElement>(null);

  const { setTriggerRef } = useDropdownContext();
  useEffect(() => {
    if (triggerRef.current) {
      setTriggerRef?.(triggerRef);
    }
  }, [triggerRef.current]);

  return <div ref={triggerRef}>{children}</div>;
};
export default Trigger;
