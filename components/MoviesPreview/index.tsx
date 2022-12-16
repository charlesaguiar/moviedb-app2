import React from "react";

import { IMovie } from "@ts/movies";
import Movie from "@components/Movie";

interface IMoviesProps {
  movies: IMovie[];
}

const MoviesPreview: React.FC<IMoviesProps> = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} showRating />
      ))}
    </>
  );
};

export default MoviesPreview;
