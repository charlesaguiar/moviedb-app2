import { formatCssVariables } from "@utils/style";
import s from "./Banner.module.scss";

interface IBannerProps {
  bgUrl: string;
  children?: React.ReactNode;
}

const Banner: React.FC<IBannerProps> = ({ bgUrl, children }) => {
  return (
    <div
      className={s.container}
      style={formatCssVariables({ name: "bgUrl", value: `url(${bgUrl})` })}
    >
      {children}
    </div>
  );
};

export default Banner;
