import useSWR from "swr";

import MoviesService from "@services/movies";

import Carousel from "@components/Carousel";
import LoadingContainer from "@components/LoadingContainer";
import Movie from "@components/Movie";

interface ISimilarMoviesProps {
  movieId: string;
}

export const Similar: React.FC<ISimilarMoviesProps> = ({ movieId }) => {
  const { data: movies } = useSWR("similar", () =>
    MoviesService.getSimilarMovies(movieId)
  );

  if (!movies) {
    return <LoadingContainer />;
  }

  return (
    <section>
      <Carousel title="Similar Movies">
        {movies.results.map((movie) => (
          <div key={movie.id}>
            <Movie movie={movie} posterWidth={150} posterHeight={200} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};
