import api from "@config/api";
import {
  IGetMovieCastResponse,
  IGetMovieGalleryResponse,
  IGetMovieKeywordsResponse,
  IGetMoviesParams,
  IGetPaginatedResponse,
  IMovie,
  IMovieDetails,
  IMovieReview,
} from "@ts/movies";

const getMovies = (parameters?: IGetMoviesParams) =>
  api.get<IGetPaginatedResponse<IMovie>>(
    `/movie/${parameters?.filter || "popular"}`,
    {
      params: { page: parameters?.page || 1 },
    }
  );

const getSimilarMovies = (movieId: string, parameters?: IGetMoviesParams) =>
  api
    .get<IGetPaginatedResponse<IMovie>>(`/movie/${movieId}/similar`, {
      params: { page: parameters?.page || 1 },
    })
    .then((r) => r.data);

const getMovie = (id: string) =>
  api.get<IMovieDetails>(`/movie/${id}`).then((r) => r.data);

const searchMovies = (parameters: IGetMoviesParams) =>
  api
    .get<IGetPaginatedResponse<IMovie>>("/search/movie", {
      params: { query: parameters.query, page: parameters.page },
    })
    .then((r) => r.data);

const getMovieCast = (movieId: string) =>
  api
    .get<IGetMovieCastResponse>(`/movie/${movieId}/credits`)
    .then((r) => r.data.cast);

const getMovieBackdrops = (movieId: string) =>
  api
    .get<IGetMovieGalleryResponse>(`/movie/${movieId}/images`, {
      params: { language: "en", include_image_language: "en,null" },
    })
    .then((r) => r.data.backdrops || []);

const getMovieKeywords = (movieId: string) =>
  api
    .get<IGetMovieKeywordsResponse>(`/movie/${movieId}/keywords`)
    .then((r) => r.data.keywords || []);

const getMovieReviews = (movieId: string, parameters?: IGetMoviesParams) =>
  api
    .get<IGetPaginatedResponse<IMovieReview>>(`/movie/${movieId}/reviews`, {
      params: { page: parameters?.page || 1 },
    })
    .then((r) => r.data);

const MoviesService = {
  getMovies,
  getSimilarMovies,
  searchMovies,
  getMovie,
  getMovieCast,
  getMovieBackdrops,
  getMovieKeywords,
  getMovieReviews,
};

export default MoviesService;
