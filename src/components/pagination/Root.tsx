import { FC, PropsWithChildren, createContext, useContext } from "react";
import usePagination from "./hooks/usePagination";

export interface PaginationRootProps extends PropsWithChildren {
  itemLength?: number;
  divider?: number;
  onChangePage?: (page: number) => void;
}
interface PaginationContextProps {
  isFirstPage: boolean;
  isLastPage: boolean;
  handleClickNav: (direction: number) => void;
  pages: Array<number>;
  handleClickPage: (page: number) => void;
  currentPage: number;
}
const PaginationContext = createContext<PaginationContextProps>({
  isFirstPage: false,
  isLastPage: false,
  handleClickNav: () => {},
  pages: [],
  handleClickPage: () => {},
  currentPage: 1,
});

export const usePaginationContext = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw Error("(!) Pagination 컨텍스트를 호출할 수 없는 범위입니다.");
  }
  return context;
};
const PaginationRoot: FC<PaginationRootProps> = (props) => {
  const { children, itemLength, divider, onChangePage } = props;

  const { pages, setCurrentPage, currentPage, isFirstPage, isLastPage } =
    usePagination({
      itemLength,
      divider,
    });

  const handleClickNav = (direction: number) => {
    // Nav 이벤트를 return 해야되는 경우
    // 1) 1번 페이지 일때,
    if (direction === -1 && isFirstPage) {
      return;
    }
    // 2) 마지막 페이지 일때,
    if (direction === 1 && isLastPage) {
      return;
    }
    const resultPage = currentPage + direction;
    setCurrentPage(resultPage);
    onChangePage?.(resultPage);
  };

  const handleClickPage = (page: number) => {
    setCurrentPage(page);
    onChangePage?.(page);
  };

  const contextValue: PaginationContextProps = {
    isFirstPage,
    isLastPage,
    handleClickNav,
    pages,
    handleClickPage,
    currentPage,
  };
  return (
    <PaginationContext.Provider value={contextValue}>
      {children}
    </PaginationContext.Provider>
  );
};
export default PaginationRoot;
