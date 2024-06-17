import { CSSProperties, FC, PropsWithChildren, useMemo } from "react";
import { useCarouselContext } from "./Root";

const dotStyle: CSSProperties = {
  display: "inline",
  marginRight: "5px",
  width: "12px !important",
  borderRadius: "6px",
  height: "12px !important",
  backgroundColor: "transparent",
  border: "1px solid #eeeeee",
};

interface CarouselIndicatorProps extends PropsWithChildren {}
const CarouselIndicator: FC<CarouselIndicatorProps> = () => {
  const { itemLength, handleClickIndicator } = useCarouselContext();

  const indicators = useMemo(
    () => itemLength && Array.from({ length: itemLength }, (_, index) => index),
    [itemLength]
  );

  const onClickDot = (index: number) => {
    handleClickIndicator?.(index);
  };
  return indicators ? (
    <>
      {indicators.map((dotIndex) => (
        <div style={dotStyle} onClick={() => onClickDot(dotIndex)} />
      ))}
    </>
  ) : null;
};
export default CarouselIndicator;
