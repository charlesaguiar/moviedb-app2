export interface IMovieCastItem {
  id: string;
  name: string;
  character: string;
  profile_path: string;
}

export interface IMovieGalleryItem {
  file_path: string;
  width: number;
  height: number;
  aspect_ratio: number;
}

export interface IMovie {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  release_date: string;
  genres_ids: number[];
}

export interface IMovieReviewAuthor {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: number | null;
}

export interface IMovieReview {
  id: string;
  author: string;
  author_details: IMovieReviewAuthor;
  content: string;
  created_at: string;
}

export interface IMovieDetails extends IMovie {
  backdrop_path: string;
  genres: { id: number; name: string }[];
  runtime: number;
  production_countries: { iso_3166_1: string; name: string }[];
  original_language: string;
  tagline?: string;
  status: string;
  budget: number;
  revenue: number;
}

export interface IGetMoviesParams {
  filter?: "popular" | "top_rated" | "now_playing" | "upcoming";
  page?: number;
  query?: string;
}

export interface IGetPaginatedResponse<TResults> {
  page: number;
  results: TResults[];
  total_pages: number;
  total_results: number;
}

export interface IGetMovieCastResponse {
  cast: IMovieCastItem[];
  crew: IMovieCastItem[];
}

export interface IGetMovieGalleryResponse {
  backdrops: IMovieGalleryItem[];
  posters: IMovieGalleryItem[];
}

export interface IGetMovieKeywordsResponse {
  id: string;
  keywords: { id: string; name: string }[];
}
