import Image from "next/image";
import Link from "next/link";

import Rating from "./Rating";

import { IMovie } from "@ts/movies";
import { MOVIE_DB_IMAGE_URL } from "@utils/constants";
import Title from "./Title";

import PosterPlaceholder from "../../public/movie-placeholder.png";

import s from "./Movie.module.scss";
import { cn } from "@utils/style";

interface IMovieProps {
  movie: IMovie;
  small?: boolean;
  constrast?: boolean;
  showRating?: boolean;
  posterWidth?: number;
  posterHeight?: number;
}

const Movie: React.FC<IMovieProps> = ({
  movie,
  small = false,
  constrast = false,
  showRating = false,
  posterWidth = 250,
  posterHeight = 400,
}) => {
  const poster = movie.poster_path
    ? `${MOVIE_DB_IMAGE_URL.original}${movie.poster_path}`
    : PosterPlaceholder;

  return (
    <div
      key={movie.id}
      className={cn("flex", small ? "flex-row gap-4 items-center" : "flex-col")}
    >
      <Link href={`/movie/${movie.id}`}>
        <a>
          <div className={s["img-container"]}>
            <div className={s.linearGradient}></div>
            <Image
              src={poster}
              alt="Movie banner"
              objectFit="cover"
              objectPosition="center"
              width={posterWidth}
              height={posterHeight}
              layout="fixed"
              className="rounded-xl"
            />
            {showRating ? (
              <div className="absolute -bottom-5 left-5">
                <Rating rating={movie.vote_average} />
              </div>
            ) : null}
          </div>
        </a>
      </Link>

      <Title
        movie={movie}
        constrast={constrast}
        classNames={showRating ? "mt-8" : ""}
      />
    </div>
  );
};

export default Movie;
