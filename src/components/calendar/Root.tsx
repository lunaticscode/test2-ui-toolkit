import {
  createContext,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
  FC,
} from "react";

type DateType = Date;
export type CalendarMode = "years" | "months" | "days";

interface CalendarContextProps {
  selectedDate?: DateType;
  setSelectedDate?: Dispatch<SetStateAction<DateType>>;
  mode: CalendarMode;
  setMode?: Dispatch<SetStateAction<CalendarMode>>;
}

const CalendarContext = createContext<CalendarContextProps>({
  selectedDate: new Date(),
  setSelectedDate: () => {},
  mode: "days",
  setMode: () => {},
});

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw Error("(!) Calendar 컨텍스트를 호출할 수 없는 범위입니다.");
  }
  return context;
};

export interface CalendarRootProps {
  defaultDate?: DateType;
  mode?: CalendarMode;
  onDateChange: (date: DateType) => void;
}

const CalendarRoot: FC<CalendarRootProps> = (props) => {
  const { defaultDate = new Date(), mode: modeProps = "days" } = props;
  const [selectedDate, setSelectedDate] = useState<DateType>(defaultDate);
  const [mode, setMode] = useState<CalendarMode>(modeProps);

  const contextValue: CalendarContextProps = {
    selectedDate,
    setSelectedDate,
    mode,
    setMode,
  };
  return (
    <CalendarContext.Provider value={contextValue}></CalendarContext.Provider>
  );
};

export default CalendarRoot;
