import { ReactNode, forwardRef } from "react";
import { useCarouselContext } from "./Root";

interface CarouselNavigatorProps {
  children?: (
    handleClickPrev: () => void,
    handleClickNext: () => void
  ) => ReactNode;
}
const CarouselNavigator = forwardRef<HTMLDivElement, CarouselNavigatorProps>(
  (props, ref) => {
    const { children } = props;
    // 1) children 없으면 자체적으로 만든 element 제공
    // 2) children 있으면 클릭 이벤트에 대한 핸들러만 제공

    const { handleClickNavigator } = useCarouselContext();
    const handleClickNext = () => {
      handleClickNavigator?.(1);
    };
    const handleClickPrev = () => {
      handleClickNavigator?.(-1);
    };

    return children ? (
      children(handleClickPrev, handleClickNext)
    ) : (
      <div ref={ref}>
        <button onClick={handleClickPrev}>prev</button>
        <button onClick={handleClickNext}>next</button>
      </div>
    );
  }
);
export default CarouselNavigator;

// Calendar
// <Root/> : Calendar가 가지고 있어야할 상태
// <CurrentDate/> : 현재 날짜 표시
// <Navigator/>
// <Body/>
