import {
  createContext,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
  FC,
  PropsWithChildren,
} from "react";

export type DateType = Date;
export type CalendarMode = "years" | "months" | "days";

export interface CalendarRootProps extends PropsWithChildren {
  defaultDate?: DateType;
  mode?: CalendarMode;
  onDateChange?: (date: DateType) => void;
  disabled?: boolean;
}

interface CalendarContextProps
  extends Pick<CalendarRootProps, "disabled" | "mode"> {
  selectedDate: DateType;
  setSelectedDate?: Dispatch<SetStateAction<DateType>>;
  setMode: Dispatch<SetStateAction<CalendarMode>>;
  handleClickDate: (date: DateType) => void;
  handleClickNavigator: (direction: -1 | 1) => void;
}

const CalendarContext = createContext<CalendarContextProps>({
  disabled: undefined,
  selectedDate: new Date(),
  setSelectedDate: () => {},
  mode: "days",
  setMode: () => {},
  handleClickDate: () => {},
  handleClickNavigator: () => {},
});

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw Error("(!) Calendar 컨텍스트를 호출할 수 없는 범위입니다.");
  }
  return context;
};

const mapModeToDecade: { [key in CalendarMode]: number } = {
  years: 12,
  months: 12,
  days: 30,
};

const CalendarRoot: FC<CalendarRootProps> = (props) => {
  const {
    defaultDate = new Date(),
    mode: modeProps = "days",
    disabled,
    children,
  } = props;
  const [selectedDate, setSelectedDate] = useState<DateType>(defaultDate);
  const [mode, setMode] = useState<CalendarMode>(modeProps);

  const handleClickDate = (date: DateType) => {
    if (disabled) return;
    setSelectedDate(date);
  };

  const handleClickNavigator = (direction: -1 | 1) => {
    // 현재 사용자가 선택한 Date 객체에 + direction
    // => mode에 따라서 direction * n 이 결정
    const changeDecade = mapModeToDecade[mode] * direction;
    console.log(changeDecade);
  };

  const contextValue: CalendarContextProps = {
    selectedDate,
    setSelectedDate,
    mode,
    setMode,
    handleClickDate,
    handleClickNavigator,
  };
  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarRoot;
