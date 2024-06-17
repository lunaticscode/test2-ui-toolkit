import { FC, PropsWithChildren } from "react";
import { useCarouselContext } from "./Root";

interface CarouselItemProps extends PropsWithChildren {
  index?: number;
}
const CarouselItem: FC<CarouselItemProps> = (props) => {
  const { children } = props;
  const { currentIndex } = useCarouselContext();

  return currentIndex === props.index ? (
    <div className="carousel-item">{children}</div>
  ) : null;
};
export default CarouselItem;
