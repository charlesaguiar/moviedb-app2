import useSWR from "swr";

import MoviesService from "@services/movies";

import LoadingContainer from "@components/LoadingContainer";
import Title from "@components/Title";

import { MOVIE_DB_IMAGE_URL } from "@utils/constants";
import Avatar from "@components/Avatar";
import Spoiler from "@components/Spoiler";
import { processAvatarUrl } from "@utils/string";
import ReviewBadge from "./ReviewBadge";

interface IMovieReviewsProps {
  movieId: string;
}

export const Reviews: React.FC<IMovieReviewsProps> = ({ movieId }) => {
  const { data: reviews } = useSWR("reviews", () =>
    MoviesService.getMovieReviews(movieId)
  );

  if (!reviews) {
    return <LoadingContainer />;
  }

  return (
    <section className="my-2">
      <Title>Reviews</Title>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10">
        {reviews.results.slice(0, 8).map((review) => (
          <div key={review.id} className="flex flex-col">
            <div className="flex gap-2 items-center mb-4">
              <Avatar
                initial={review.author[0]}
                src={
                  review.author_details?.avatar_path
                    ? processAvatarUrl(
                        MOVIE_DB_IMAGE_URL.original,
                        review.author_details?.avatar_path
                      )
                    : undefined
                }
                className="bg-secondaryBackground"
                size={75}
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold">
                  {review.author_details.name || review.author_details.username}
                </span>
                <span className="text-sm italic">
                  {review.author_details.username}
                </span>
                <ReviewBadge stars={review.author_details.rating || 0} />
              </div>
            </div>
            <Spoiler height="100px">
              <span>{review.content}</span>
            </Spoiler>
          </div>
        ))}
      </div>
    </section>
  );
};
