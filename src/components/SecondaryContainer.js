import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  console.log(movies?.results);

  return (
    <div className="bg-black -mt-32  p-12 relative z-40">
      <MovieList title={"Now Playing"} movies={movies?.results} />
      <MovieList title={"Popular"} movies={movies?.results} />
      <MovieList title={"Sci-Fi"} movies={movies?.results} />
      <MovieList title={"Drama"} movies={movies?.results} />
    </div>
  );
};

export default SecondaryContainer;
