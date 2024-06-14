import { FC, PropsWithChildren } from "react";
import { usePaginationContext } from "./Root";

interface PaginationNavigatorProps extends PropsWithChildren {}
const Navigator: FC<PaginationNavigatorProps> = () => {
  const { isFirstPage, isLastPage, handleClickNav } = usePaginationContext();
  return (
    <div>
      <button disabled={isFirstPage} onClick={() => handleClickNav(-1)}>
        {"prev"}
      </button>
      <button disabled={isLastPage} onClick={() => handleClickNav(1)}>
        {"next"}
      </button>
    </div>
  );
};
export default Navigator;
