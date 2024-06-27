import { FC, ReactNode } from "react";
import { DateType } from "./Root";
import useCalendarDate from "./hooks/useCalendarDate";
import DateCell from "./internal/DateCell";

interface CalendarBodyProps {
  children?: (dates: DateType[]) => ReactNode;
}

const CalendarBody: FC<CalendarBodyProps> = (props) => {
  const { children } = props;
  const dates = useCalendarDate();
  if (children) {
    return children(dates);
  }
  return (
    <>
      {dates.map((date) => (
        <DateCell
          key={`calendar-date-cell-${date.toUTCString()}`}
          date={date}
        />
      ))}
    </>
  );
};
export default CalendarBody;
