import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="p-2 font-semibold mx-4 md:mx-10 text-2xl text-white">
        {title}
      </h1>
      <div className="flex overflow-x-scroll scroll-smooth scrollbar-hide hi p-2">
        {/* Apply overflow-x-auto to enable horizontal scrolling */}
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
