import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export interface AccordionProps extends PropsWithChildren {}

interface AccodionContextProps extends AccordionProps {
  expandedValues?: string[];
  setExpandedValues?: Dispatch<SetStateAction<string[]>>;
}
const AccodionContext = createContext<AccodionContextProps>({});

export const useAccodionContext = () => {
  const context = useContext(AccodionContext);
  if (!context) {
    throw Error("(!) Accordion 컨텍스트를 호출할 수 없는 범위 입니다.");
  }
  return context;
};

const Root: FC<AccordionProps> = (props) => {
  const { children } = props;
  const [expandedValues, setExpandedValues] = useState<string[]>([]);

  const contextValue = {
    expandedValues,
    setExpandedValues,
  };
  return (
    <AccodionContext.Provider value={contextValue}>
      {children}
    </AccodionContext.Provider>
  );
};
export default Root;
