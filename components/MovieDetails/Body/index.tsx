import { MdPlayCircle } from "react-icons/md";

import Divider from "@components/Divider";
import Rating from "@components/Movie/Rating";

import { IMovieDetails } from "@ts/movies";
import { convertMinutesToHoursMinutes, tryFormatDate } from "@utils/date";

interface IMovieDetailsBodyProps {
  movie: IMovieDetails;
}

export const Body: React.FC<IMovieDetailsBodyProps> = ({ movie }) => {
  return (
    <section>
      <div className="flex gap-4">
        <span>{tryFormatDate(movie.release_date, "yyyy")}</span>
        <span>&#8226;</span>
        <span>
          {movie.genres
            .slice(0, 2)
            .map((g) => g.name)
            .join(", ")}
        </span>
        <span>&#8226;</span>
        <span>{convertMinutesToHoursMinutes(movie.runtime)}</span>
      </div>
      <div className="flex w-full justify-evenly items-center my-4">
        <Rating rating={movie.vote_average} />
        <Divider orientation="vertical" />
        <div className="flex gap-4 items-center">
          <MdPlayCircle size={40} />
          <span>Play trailer</span>
        </div>
      </div>
      <div className="my-4">
        <p>{movie.overview}</p>
      </div>
    </section>
  );
};
