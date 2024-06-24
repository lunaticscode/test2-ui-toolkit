import { useCalendarContext } from "../Root";

// 사용자가 선택한 날짜에 맞춰서 캘린더 UI를 그릴 Date 객체 배열을 return;
const useCalendarDate = () => {
  const { selectedDate } = useCalendarContext();
  // selectedDate 기반으로 보여줘야할 Date 객체 배열을 생성.
  const dates: Date[] = [];
  return dates;
};
export default useCalendarDate;
