import { useMemo, useState } from "react";

const getMemorizedRule = (currentPage: number, divider: number) => {
  // 1 ~ 10까지에서는 아무 숫자나 업데이트 되더라도 기존 생성된 Array를 그대로 사용
  // 단, 11이 됬을 때는 11 ~ 20에 해당되는 새로운 Array를 생성
  console.log(currentPage, (Math.ceil(currentPage / divider) - 1) * divider);
  return (Math.ceil(currentPage / divider) - 1) * divider; // 1 ~ 10 => 0, 11 ~ 20 => 10
};
const DEFAULT_DIVIDER = 10;
const usePagination = ({ itemLength = 0, divider = DEFAULT_DIVIDER }) => {
  // 현재 사용자가 바라보고 있는 페이지 번호;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const isFirstPage = useMemo(() => currentPage === 1, [currentPage]);

  const isLastPage = useMemo(
    () => Math.ceil(itemLength / divider) === currentPage,
    [itemLength, divider, currentPage]
  );
  // length: 121
  // 11 =>
  // 1 => (1 / divider) * 10
  const pageLength = useMemo(
    () =>
      Math.ceil(currentPage / divider) * divider <
      Math.ceil(itemLength / divider)
        ? divider
        : Math.ceil(itemLength / divider) % divider,
    [currentPage, divider, itemLength]
    // [getMemorizedRule(currentPage, divider)]
  );

  const pages: Array<number> = useMemo(
    () =>
      Array.from(
        { length: pageLength },
        (_, index) =>
          (Math.ceil(currentPage / divider) - 1) * divider + (index + 1)
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getMemorizedRule(currentPage, divider)]
  );

  return { pages, setCurrentPage, currentPage, isLastPage, isFirstPage };
};
export default usePagination;
