import { PropsWithChildren, forwardRef, useId } from "react";
import { useDropdownContext } from "./Root";

interface DropdownItemProps extends PropsWithChildren {
  value?: string;
  disabled?: boolean;
}
const Item = forwardRef<HTMLDivElement, DropdownItemProps>((props, ref) => {
  const { value, disabled, children } = props;
  const { handleClickItem } = useDropdownContext();
  const dropdownElementValue = useId();
  const onClickItem = () => {
    if (disabled) return;
    handleClickItem?.(value ?? dropdownElementValue);
  };
  return (
    <div ref={ref} onClick={onClickItem}>
      {children}
    </div>
  );
});
export default Item;
