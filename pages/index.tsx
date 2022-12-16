import type { GetStaticProps, NextPage } from "next";

import MoviesService from "@services/movies";

import { IGetPaginatedResponse, IMovie } from "@ts/movies";

import Carousel from "@components/Carousel";
import MoviesPreview from "@components/MoviesPreview";
import Banner from "@components/Banner";

import s from "../design/pages/Home.module.scss";

type TMoviesResult = IGetPaginatedResponse<IMovie>;

interface IHomeProps {
  movies: {
    popular: TMoviesResult;
    topRated: TMoviesResult;
    nowPlaying: TMoviesResult;
    upcoming: TMoviesResult;
  };
}

const Home: NextPage<IHomeProps> = ({ movies }) => {
  return (
    <>
      <Banner bgUrl="family-guy.jpeg">
        <div className={s.content}>
          <h1 className={s.title}>Your Favorites!</h1>
          <span className={s.sub}>
            Millions of movies, TV shows and people to discover. Explore now!
          </span>
        </div>
      </Banner>
      <div className="flex flex-col gap-4 my-8">
        <Carousel title="Popular 👀​​">
          <MoviesPreview movies={movies.popular.results} />
        </Carousel>

        <Carousel title="Top Rated 👌🏻​​">
          <MoviesPreview movies={movies.topRated.results} />
        </Carousel>

        <Carousel title="Now Playing ​🎬">
          <MoviesPreview movies={movies.nowPlaying.results} />
        </Carousel>

        <Carousel title="Upcoming ​✨​​">
          <MoviesPreview movies={movies.upcoming.results} />
        </Carousel>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const [popular, topRated, nowPlaying, upcoming] = await Promise.all([
    MoviesService.getMovies({ filter: "popular" }),
    MoviesService.getMovies({ filter: "top_rated" }),
    MoviesService.getMovies({ filter: "now_playing" }),
    MoviesService.getMovies({ filter: "upcoming" }),
  ]);

  return {
    props: {
      movies: {
        popular: popular.data,
        topRated: topRated.data,
        nowPlaying: nowPlaying.data,
        upcoming: upcoming.data,
      },
    },
    revalidate: 1000,
  };
};

export default Home;
