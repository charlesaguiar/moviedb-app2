import { formatCssVariables } from "@utils/style";
import s from "./Rating.module.scss";

interface IRatingProps {
  rating: number;
}

const Rating: React.FC<IRatingProps> = ({ rating }) => {
  const getRatingColor = () => {
    if (rating < 3) {
      return "red";
    }

    if (rating >= 3 && rating < 7) {
      return "yellow";
    }

    return "chartreuse";
  };

  return (
    <div
      className={s.chart}
      style={formatCssVariables(
        { name: "percentage", value: `${rating * 10}%` },
        { name: "color", value: getRatingColor() }
      )}
    >
      <p>{Math.ceil(rating * 10)}</p>
    </div>
  );
};

export default Rating;
