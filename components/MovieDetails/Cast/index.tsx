import { useCallback } from "react";
import Image from "next/image";
import useSWR from "swr";

import MoviesService from "@services/movies";

import Carousel from "@components/Carousel";
import LoadingContainer from "@components/LoadingContainer";

import { MOVIE_DB_IMAGE_URL } from "@utils/constants";
import { IMovieCastItem } from "@ts/movies";

import PersonPlaceholder from "../../../public/person-placeholder.jpeg";

interface IMovieCastProps {
  movieId: string;
}

export const Cast: React.FC<IMovieCastProps> = ({ movieId }) => {
  const { data: cast } = useSWR("cast", () =>
    MoviesService.getMovieCast(movieId)
  );

  const getCastProfile = useCallback(
    (cast: IMovieCastItem) =>
      cast.profile_path
        ? `${MOVIE_DB_IMAGE_URL.original}${cast.profile_path}`
        : PersonPlaceholder,
    []
  );

  if (!cast) {
    return <LoadingContainer />;
  }

  return (
    <section>
      <Carousel title="Cast">
        {(cast || []).slice(0, 8).map((actor) => (
          <div key={actor.id}>
            <Image
              src={getCastProfile(actor)}
              width="200px"
              height="300px"
              alt="Actor Profile"
              objectFit="cover"
              objectPosition="center"
              layout="fixed"
            />
            <div className="flex flex-col">
              <span className="font-bold">{actor.name}</span>
              <span className="text-sm italic">{`as ${actor.character}`}</span>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};
