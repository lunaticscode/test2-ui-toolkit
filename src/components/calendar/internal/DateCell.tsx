import { FC } from "react";
import { DateType, useCalendarContext } from "../Root";

interface DateCellProps {
  date: DateType;
}
// const getFormatedDate = (date: DateType, mode: CalendarMode) => {};
const DateCell: FC<DateCellProps> = (props) => {
  const { mode, handleClickDate } = useCalendarContext();
  const { date } = props;
  // const

  return (
    <div onClick={() => handleClickDate(date)}>
      {`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
    </div>
  );
};
export default DateCell;
