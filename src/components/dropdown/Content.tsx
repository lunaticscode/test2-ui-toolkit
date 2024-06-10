import { FC, PropsWithChildren } from "react";
import { Popover } from "..";
import { useDropdownContext } from "./Root";

interface DropdownContentProps extends PropsWithChildren {}

const Content: FC<DropdownContentProps> = (props) => {
  const { children } = props;
  // Context에 접근해서 , Trigger의 ref를 받아온다.
  const { triggerRef: anchor, orientation } = useDropdownContext();
  return (
    <Popover.Root anchor={anchor} position={orientation}>
      <Popover.Portal>{children}</Popover.Portal>
    </Popover.Root>
  );
};
export default Content;
