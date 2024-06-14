import { FC, PropsWithChildren } from "react";
import { usePaginationContext } from "./Root";
interface PaginationPagesProps extends PropsWithChildren {}
const Pages: FC<PaginationPagesProps> = () => {
  const { pages = [], currentPage, handleClickPage } = usePaginationContext();

  const onClickPage = (page: number) => {
    if (currentPage === page) {
      return;
    }
    handleClickPage(page);
  };
  return (
    <>
      {pages.map((page) => (
        <button
          style={{ color: currentPage === page ? "red" : "black" }}
          key={`page-button-${page}`}
          onClick={() => onClickPage(page)}
        >
          {page}
        </button>
      ))}
    </>
  );
};
export default Pages;
