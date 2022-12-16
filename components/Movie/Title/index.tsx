import { format } from "date-fns";
import { IMovie } from "@ts/movies";
import { cn } from "@utils/style";

interface ITitleProps {
  movie: IMovie;
  constrast?: boolean;
  classNames?: string;
}

const Title: React.FC<ITitleProps> = ({
  movie,
  constrast = false,
  classNames = "",
}) => {
  return (
    <div
      className={cn(
        `flex flex-col ${constrast ? "text-primary" : "text-secondary"}`,
        classNames
      )}
    >
      <span className="font-semibold text-xl">{movie.title}</span>
      <span className="italic">
        {movie.release_date
          ? format(new Date(movie.release_date), "MMM dd, yyyy")
          : "-"}
      </span>
    </div>
  );
};

export default Title;
