import { FC } from "react";
import { useCalendarContext } from "../Root";

interface DateCellProps {
  date?: Date;
}
const getFormatedDate = (date: Date, mode: CalendarMode) => {

}
const DateCell: FC<DateCellProps> = (props) => {
  const {mode} = useCalendarContext();
  const { date } = props;
  // const
  
  return <div>{getFormatedDate(date, mode)}</div>;
};
export default DateCell;
