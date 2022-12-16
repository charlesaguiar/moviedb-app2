export const MOVIE_DB_IMAGE_URL = {
  small: "https://image.tmdb.org/t/p/w185",
  medium: "https://image.tmdb.org/t/p/w300",
  large: "https://image.tmdb.org/t/p/w1280",
  original: "https://image.tmdb.org/t/p/original",
};

export const MOVIES_CONTEXT_INITIAL_VALUE = {
  searchTerm: "",
  movies: [],
  mainMovie: null,
  pagination: { totalResults: 0, totalPages: 1, page: 1 },
};

export const POSTER_SIZES = {
  small: { width: "150px", height: "225px" },
  medium: { width: "300px", height: "450px" },
};
