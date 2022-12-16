import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";

import MoviesService from "@services/movies";

import Banner from "@components/Banner";
import Divider from "@components/Divider";
import Flag from "@components/Flag";
import LoadingContainer from "@components/LoadingContainer";

import { MOVIE_DB_IMAGE_URL } from "@utils/constants";

import * as Movie from "@components/MovieDetails";

const MovieDetails: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { data: movie } = useSWR(id, (movieId: string) =>
    MoviesService.getMovie(movieId)
  );

  if (!movie) {
    return <LoadingContainer />;
  }

  const movieId = id as string;

  console.log({ movie });

  return (
    <div className="text-secondary">
      <Banner bgUrl={`${MOVIE_DB_IMAGE_URL.original}${movie.backdrop_path}`}>
        <div className="flex flex-col gap-2 p-4">
          <div className="text-5xl font-bold">{movie.title}</div>
          {movie.tagline ? (
            <div className="text-sm italic">{movie.tagline}</div>
          ) : null}
          <div className="flex gap-2 items-center">
            {movie.production_countries.map(({ iso_3166_1: country }) => (
              <Flag key={country} country={country} width={20} height={15} />
            ))}
            <span>&#8226;</span>
            <div className="flex justify-center items-center w-8 h-8 rounded-lg bg-slate-100 text-primary font-bold">
              {movie.original_language.toUpperCase()}
            </div>
          </div>
        </div>
      </Banner>
      <div className="flex flex-col gap-2 my-4">
        <Movie.Body movie={movie} />
        <Movie.Stats movie={movie} />
        <Movie.Keywords movieId={movieId} />
        <Divider />
        <Movie.Cast movieId={movieId} />
        <Movie.Gallery movieId={movieId} />
        <Movie.Similar movieId={movieId} />
        <Movie.Reviews movieId={movieId} />
      </div>
    </div>
  );
};

export default MovieDetails;
