import { useCallback, useMemo, useRef, useState } from "react";

interface ISpoilerProps {
  height: string;
  children: React.ReactNode;
}

const Spoiler: React.FC<ISpoilerProps> = ({ height = "150px", children }) => {
  const [maxHeight, setMaxHeight] = useState(height);
  const [showSeeMore, setShowSeeMore] = useState(false);

  const onSeeMoreClick = useCallback(() => {
    setMaxHeight((prev) => (prev === height ? "fit-content" : height));
  }, [height]);

  const label = useMemo(() => {
    return maxHeight === height ? "more..." : "less...";
  }, [height, maxHeight]);

  const wrappedRef = useCallback((ref: HTMLDivElement) => {
    if (!ref) return;
    setShowSeeMore(ref.clientHeight < ref.scrollHeight);
  }, []);

  return (
    <div className="flex flex-col">
      <div ref={wrappedRef} className="overflow-hidden" style={{ maxHeight }}>
        {children}
      </div>
      {showSeeMore ? (
        <span
          onClick={onSeeMoreClick}
          className="self-end p-2 cursor-pointer underline text-sm text-blue-500"
        >
          {`See ${label}`}
        </span>
      ) : null}
    </div>
  );
};

export default Spoiler;
