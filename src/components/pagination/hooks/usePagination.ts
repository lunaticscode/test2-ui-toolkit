import { useMemo, useState } from "react";

// const getMemorizedRule = () => {

// }
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
    [currentPage, divider, pageLength]
    // [getMemorizedRule(currentPage, divider)]
  );

  return { pages, setCurrentPage, currentPage, isLastPage, isFirstPage };
};
export default usePagination;
