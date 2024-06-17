import {
  FC,
  PropsWithChildren,
  Children,
  ReactElement,
  useEffect,
  cloneElement,
} from "react";
import { useCarouselContext } from "./Root";

interface CarouselContainerProps extends PropsWithChildren {}

const CarouselContainer: FC<CarouselContainerProps> = ({ children }) => {
  const { setItemLength } = useCarouselContext();
  const _children = Children.toArray(children) as ReactElement[];

  useEffect(() => {
    setItemLength?.(_children.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_children.length]);

  return (
    <>
      {_children.map((child, index) =>
        cloneElement(child, { ...child.props, index })
      )}
    </>
  );
};
export default CarouselContainer;
