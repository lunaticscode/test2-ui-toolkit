import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface CarouselRootProps extends PropsWithChildren {}
interface CarouselContextProps extends CarouselRootProps {
  currentIndex?: number;
  handleClickNavigator?: (direction: number) => void;
  handleClickIndicator?: (index: number) => void;
  itemLength?: number;
  setItemLength?: Dispatch<SetStateAction<number>>;
}
const CarouselContext = createContext<CarouselContextProps>({
  currentIndex: 0,
  handleClickIndicator: () => {},
  handleClickNavigator: () => {},
  itemLength: 0,
  setItemLength: () => {},
});
export const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw Error("(!) Carousel 컨텍스트를 호출할 수 없는 범위 입니다.");
  }
  return context;
};

const CarouselRoot: FC<CarouselRootProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemLength, setItemLength] = useState<number>(0);

  const handleClickNavigator = (direction: number) => {
    const resultIndex = currentIndex + direction;
    // next
    // item의 총 개수에 도달했을 때는 0번 인덱스로 가게끔
    if (resultIndex >= itemLength) {
      setCurrentIndex(0);
      return;
    }
    // prev
    // 0번 인덱스에서 prev할 경우 아이템의 총개수 -1을 한 index로 이동
    if (resultIndex < 0) {
      setCurrentIndex(itemLength - 1);
      return;
    }
    setCurrentIndex(resultIndex);
  };

  const handleClickIndicator = (index: number) => {
    setCurrentIndex(index);
  };
  const { children } = props;

  const contextValue: CarouselContextProps = {
    currentIndex,
    handleClickIndicator,
    handleClickNavigator,
    itemLength,
    setItemLength,
  };
  return (
    <CarouselContext.Provider value={contextValue}>
      {children}
    </CarouselContext.Provider>
  );
};
export default CarouselRoot;

{
  /* <Carousel.Root>
  <Carousel.Container>
    <Carousel.Item></Carousel.Item>
    <Carousel.Item></Carousel.Item>
    <Carousel.Item></Carousel.Item>
    <Carousel.Item></Carousel.Item>
  </Carousel.Container>
  <Carousel.Navigator />
  <Carousel.Indicator />
</Carousel.Root>; */
}
