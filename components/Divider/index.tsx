import { useCallback, useState } from "react";

interface IDividerProps {
  orientation?: "vertical" | "horizontal";
  height?: number;
}
const Divider: React.FC<IDividerProps> = ({
  orientation = "horizontal",
  height = 0,
}) => {
  const [dividerHeight, setDividerHeight] = useState(0);

  const dividerRef = useCallback(
    (ref: HTMLDivElement) => {
      if (!ref || orientation !== "vertical") return;
      setDividerHeight(ref.parentElement?.offsetHeight || height);
    },
    [orientation, height]
  );

  const classNames =
    orientation === "horizontal"
      ? "w-full h-[2px] bg-white"
      : `w-[2px] h-[${dividerHeight}px] bg-white`;

  return <div ref={dividerRef} className={classNames} />;
};

export default Divider;
