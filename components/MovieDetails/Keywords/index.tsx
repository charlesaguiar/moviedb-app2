import useSWR from "swr";

import MoviesService from "@services/movies";

import LoadingContainer from "@components/LoadingContainer";

interface IMovieKeywordsProps {
  movieId: string;
}

export const Keywords: React.FC<IMovieKeywordsProps> = ({ movieId }) => {
  const { data: keywords } = useSWR("keywords", () =>
    MoviesService.getMovieKeywords(movieId)
  );

  if (!keywords) {
    return <LoadingContainer />;
  }

  console.log({ keywords });

  return (
    <section className="my-4">
      <div className="flex flex-wrap gap-1">
        {keywords.slice(0, 10).map((kw) => (
          <div
            key={kw.id}
            className="bg-slate-300 rounded-md p-1 text-sm text-primary"
          >
            {kw.name}
          </div>
        ))}
      </div>
    </section>
  );
};
