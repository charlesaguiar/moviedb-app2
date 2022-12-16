import { DotLoader } from "react-spinners";
import { cn } from "@utils/style";

interface ILoadingContainerProps {
  loaderColor?: string;
  classNames?: string;
}

const LoadingContainer: React.FC<ILoadingContainerProps> = ({
  loaderColor = "white",
  classNames = "",
}) => {
  return (
    <div className={cn("flex items-center justify-center p-8", classNames)}>
      <DotLoader
        color={loaderColor}
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingContainer;
