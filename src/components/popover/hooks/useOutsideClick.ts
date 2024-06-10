import { RefObject, useEffect, useState } from "react";

const useOutsideClick = () => {
  const [isOutside, setIsOutside] = useState<boolean>(false);
  const [targetRef, setTargetRef] = useState<RefObject<HTMLElement>>({
    current: null,
  });

  const handleClickOutside = (e: MouseEvent) => {
    // console.log()
    if (targetRef.current?.contains(e.target as HTMLElement)) {
      setIsOutside(false);
    } else {
      setIsOutside(true);
    }
  };
  useEffect(() => {
    if (targetRef.current) {
      window.addEventListener("click", handleClickOutside);
      return () => {
        window.removeEventListener("click", handleClickOutside);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetRef.current]);

  return {
    isOutside,
    setTargetRef,
  };
};

export default useOutsideClick;
