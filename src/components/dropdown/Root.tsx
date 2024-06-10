import {
  Dispatch,
  FC,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { PopoverPositions } from "../popover/Root";

interface DropdownRootProps extends PropsWithChildren {
  onValueChange?: (value: string) => void;
  orientation?: PopoverPositions;
}
interface DropdownRootContextProps
  extends Pick<DropdownRootProps, "orientation"> {
  setTriggerRef?: Dispatch<
    SetStateAction<RefObject<HTMLDivElement> | undefined>
  >;
  triggerRef?: RefObject<HTMLDivElement>;
  handleClickItem?: (itemValue: string) => void;
}

const DropdownContext = createContext<DropdownRootContextProps>({
  triggerRef: undefined,
  setTriggerRef: () => {},
  handleClickItem: () => {},
});

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw Error("(!) DropdownContext를 호출할 수 없는 범위입니다.");
  }
  return context;
};

const Root: FC<DropdownRootProps> = (props) => {
  const { children, onValueChange, orientation = "bottom-left" } = props;
  const [triggerRef, setTriggerRef] = useState<
    RefObject<HTMLDivElement> | undefined
  >();

  const handleClickItem = (itemValue: string) => {
    onValueChange?.(itemValue);
  };

  const contextValue = {
    triggerRef,
    setTriggerRef,
    handleClickItem,
    orientation,
  };

  return (
    <DropdownContext.Provider value={contextValue}>
      {children}
    </DropdownContext.Provider>
  );
};
export default Root;
