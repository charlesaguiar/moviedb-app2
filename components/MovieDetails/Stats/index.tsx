import {
  RiMovie2Line,
  RiMoneyDollarCircleFill,
  RiFlagFill,
} from "react-icons/ri";

import StatsItem from "./StatsItem";

import { IMovieDetails } from "@ts/movies";
import { formatCurrency } from "@utils/number";

interface IMovieStatsProps {
  movie: IMovieDetails;
}

export const Stats: React.FC<IMovieStatsProps> = ({ movie }) => {
  return (
    <section className="grid grid-cols-2 gap-y-4 items-center">
      <StatsItem
        title="Status"
        value={movie.status}
        icon={<RiMovie2Line size={22} />}
      />
      <StatsItem
        title="Language"
        value={movie.original_language.toUpperCase()}
        icon={<RiFlagFill size={22} />}
      />
      <StatsItem
        title="Budget"
        value={formatCurrency(movie.budget)}
        icon={<RiMoneyDollarCircleFill size={22} />}
      />
      <StatsItem
        title="Revenue"
        value={formatCurrency(movie.revenue)}
        icon={<RiMoneyDollarCircleFill size={22} />}
      />
    </section>
  );
};
