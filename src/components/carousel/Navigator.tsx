import { PropsWithChildren, forwardRef } from "react";
import { useCarouselContext } from "./Root";

interface CarouselNavigatorProps extends PropsWithChildren {}
const CarouselNavigator = forwardRef<HTMLDivElement, CarouselNavigatorProps>(
  (props, ref) => {
    // const { children } = props;
    // 1) children 없으면 자체적으로 만든 element 제공
    // 2) children 있으면 클릭 이벤트에 대한 핸들러만 제공

    const { handleClickNavigator } = useCarouselContext();
    const handleClickNext = () => {
      handleClickNavigator?.(1);
    };
    const handleClickPrev = () => {
      handleClickNavigator?.(-1);
    };
    return (
      <div ref={ref}>
        <button onClick={handleClickPrev}>prev</button>
        <button onClick={handleClickNext}>next</button>
      </div>
    );
  }
);
export default CarouselNavigator;
