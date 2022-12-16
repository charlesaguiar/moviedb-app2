import { RefObject, useCallback, useEffect } from "react";

const useClickOutside = (
  target: RefObject<HTMLElement | null | undefined>,
  callback: (e: MouseEvent) => void
) => {
  const listener = useCallback(
    (e: MouseEvent) => {
      if (!target.current) return;

      if (!target.current.contains(e.target as HTMLElement)) {
        callback(e);
      }
    },
    [callback, target]
  );

  useEffect(() => {
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [listener]);
};

export default useClickOutside;
