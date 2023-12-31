import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  const popularMovies = useSelector((store) => store.movie?.popularMovies);

  return (
    <div className="bg-black md:-mt-32  p-6 md:p-12 relative z-40 ">
      <MovieList title={"Now Playing"} movies={movies?.results} />
      <MovieList title={"Trending"} movies={movies?.results} />
      <MovieList title={"Popular"} movies={popularMovies?.results} />
      <MovieList title={"Anime"} movies={movies?.results} />
    </div>
  );
};

export default SecondaryContainer;
