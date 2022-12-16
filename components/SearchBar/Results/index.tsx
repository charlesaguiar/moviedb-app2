import Link from "next/link";
import useSWR from "swr";

import LoadingContainer from "@components/LoadingContainer";
import MoviesService from "@services/movies";
import Movie from "@components/Movie";

import s from "../SearchBar.module.scss";

interface ISearchResultsProps {
  query: string;
}

const Results: React.FC<ISearchResultsProps> = ({ query }) => {
  const { data } = useSWR([query], () => MoviesService.searchMovies({ query }));

  if (!query) {
    return (
      <div className={s["search-results-idle"]}>
        Type something to search you dumbass
      </div>
    );
  }

  if (!data) {
    return (
      <LoadingContainer classNames="bg-white rounded-xl" loaderColor="black" />
    );
  }

  if (!data.results?.length) {
    return (
      <div className={s["search-results-idle"]}>
        No movies found for your stupid query
      </div>
    );
  }

  return (
    <div className={s["search-results-container"]}>
      <div className={s["search-results"]}>
        <span className="mb-4 self-end">{`Showing ${
          data?.results?.length || 0
        } of ${data?.total_results} titles`}</span>
        <div className={s["search-results-list"]}>
          {data?.results?.map((movie) => (
            <div key={movie.id}>
              <Movie
                movie={movie}
                posterHeight={100}
                posterWidth={100}
                showRating={false}
                small
                constrast
              />
            </div>
          ))}
        </div>
      </div>
      <>
        {query ? (
          <div className={s["search-results-footer"]}>
            <Link href={{ pathname: "/search", query: { query } }}>
              <a>{`See all titles for: ${query}`}</a>
            </Link>
          </div>
        ) : null}
      </>
    </div>
  );
};

export default Results;
