import { useMemo } from "react";
import { useCalendarContext } from "../Root";

// 사용자가 선택한 날짜에 맞춰서 캘린더 UI를 그릴 Date 객체 배열을 return;
const useCalendarDate = () => {
  const { selectedDate } = useCalendarContext();

  // mode === "days"
  // 6월 기준
  const currentYear = selectedDate.getFullYear(); // 년 ex) 2024
  const currentMonth = selectedDate.getMonth(); // 현재 달의 -1

  const monthlyFirstDate = new Date(currentYear, currentMonth, 1);
  /** 해당 월의 첫번째 요일 */
  const monthlyFirstDay = monthlyFirstDate.getDay(); // 0 ~ 6

  /** 달력의 첫번째 날 */
  const firstDate = new Date(
    monthlyFirstDate.getTime() - 3600 * 24 * 1000 * monthlyFirstDay
  );

  /** 해당 월의 마지막 날짜 */
  const monthlyLastDate = new Date(currentYear, currentMonth + 1, 0);
  /** 해당 월의 마지막 요일 */
  const monthlyLastDay = monthlyLastDate.getDay();

  /** 달력의 마지막 날 */
  const lastDate = new Date(
    monthlyLastDate.getTime() + 3600 * 24 * 1000 * (6 - monthlyLastDay)
  );

  const length =
    (lastDate.getTime() - firstDate.getTime()) / (3600 * 1000 * 24) + 1;

  // selectedDate 기반으로 보여줘야할 Date 객체 배열을 생성.
  const dates = useMemo(
    () =>
      Array.from(
        { length },
        (_, index) => new Date(firstDate.getTime() + 3600 * 1000 * 24 * index)
      ),
    [firstDate, length]
  );
  return dates;
};
export default useCalendarDate;
