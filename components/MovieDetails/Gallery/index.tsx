import Image from "next/image";
import useSWR from "swr";

import MoviesService from "@services/movies";

import Carousel from "@components/Carousel";
import LoadingContainer from "@components/LoadingContainer";

import { MOVIE_DB_IMAGE_URL } from "@utils/constants";

interface IMovieGalleryProps {
  movieId: string;
}

export const Gallery: React.FC<IMovieGalleryProps> = ({ movieId }) => {
  const { data: backdrops } = useSWR("backdrops", () =>
    MoviesService.getMovieBackdrops(movieId)
  );

  if (!backdrops) {
    return <LoadingContainer />;
  }

  return (
    <section>
      <Carousel title="Gallery">
        {backdrops.map((backdrop) => (
          <div
            key={backdrop.file_path}
            className="min-w-full h-[300px] relative"
          >
            <Image
              src={`${MOVIE_DB_IMAGE_URL.original}${backdrop.file_path}`}
              alt="Actor Profile"
              objectFit="contain"
              objectPosition="center"
              layout="fill"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};
