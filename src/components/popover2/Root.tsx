import {
  FC,
  PropsWithChildren,
  RefObject,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type PopoverOrientations = "bottom-left" | "bottom-right";
export interface PopoverRootProps extends PropsWithChildren {
  anchor?: RefObject<HTMLElement>;
  orientation?: PopoverOrientations;
}
interface PopoverContextProps
  extends Pick<PopoverRootProps, "anchor" | "orientation"> {}
const PopoverContext = createContext<PopoverContextProps>({
  anchor: undefined,
  orientation: "bottom-left",
});

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw Error("(!) Popover 컨텍스트를 호출할 수 없는 범 입니다.");
  }
  return context;
};

const Root: FC<PopoverRootProps> = (props) => {
  const { children, anchor: anchorProp } = props;
  const [anchor, setAnchor] = useState<RefObject<HTMLElement>>();
  useEffect(() => {
    if (anchorProp?.current) {
      setAnchor(anchorProp);
    }
  }, [anchorProp]);

  const contextValue: PopoverContextProps = {
    anchor,
  };
  return (
    <PopoverContext.Provider value={contextValue}>
      {children}
    </PopoverContext.Provider>
  );
};
export default Root;

// <Popover.Root>
//     <Popover.Portal/>
// </Popover.Root>
