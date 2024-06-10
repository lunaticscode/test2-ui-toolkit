import {
  Dispatch,
  FC,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type PopoverPositions = "bottom-left" | "bottom-right";
interface PopoverRootProps extends PropsWithChildren {
  anchor?: RefObject<HTMLElement>;
  position?: PopoverPositions;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open?: boolean) => void;
}

interface PopoverContextProps extends PopoverRootProps {
  setAnchor?: Dispatch<SetStateAction<RefObject<HTMLElement> | undefined>>;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}
const PopoverContext = createContext<PopoverContextProps>({
  anchor: undefined,
  position: "bottom-left",
  setAnchor: () => {},
  setOpen: () => {},
  open: undefined,
});

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw Error("(!) Popover 컨텍스트를 호출할 수 없는 범위입니다.");
  }
  return context;
};

const Root: FC<PopoverRootProps> = ({
  children,
  anchor,
  position,
  defaultOpen = false,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [anchorElement, setAnchor] = useState<RefObject<HTMLElement>>();
  const [open, setOpen] = useState(defaultOpen);

  const handleClickAnchorButton = () => {
    console.log("current open state :", open);
    setOpen(!open);
  };

  useEffect(() => {
    if (anchor?.current) {
      anchor.current?.addEventListener("click", handleClickAnchorButton);
      return () => {
        anchor.current?.removeEventListener("click", handleClickAnchorButton);
      };
    }
  }, [anchor?.current, open]);

  const contextValue = {
    anchor,
    setAnchor,
    position,
    open,
  };
  return (
    <PopoverContext.Provider value={contextValue}>
      {children}
    </PopoverContext.Provider>
  );
};

export default Root;
