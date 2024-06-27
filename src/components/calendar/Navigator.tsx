import { FC, ReactNode } from "react";
import { useCalendarContext } from "./Root";

interface CalendarNavigatorProps {
  children?: (handlePrev: () => void, handleNext: () => void) => ReactNode;
}
const CalendarNavigator: FC<CalendarNavigatorProps> = (props) => {
  const { children } = props;
  const { handleClickNavigator } = useCalendarContext();

  const handleClickPrev = () => {
    handleClickNavigator(-1);
  };

  const handleClickNext = () => {
    handleClickNavigator(1);
  };

  if (children) {
    return children?.(handleClickPrev, handleClickNext);
  }
  return (
    <div>
      <button onClick={handleClickPrev}>prev</button>
      <button onClick={handleClickNext}>next</button>
    </div>
  );
};
export default CalendarNavigator;
