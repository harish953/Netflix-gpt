import React from "react";
import { MOVIE_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  const imageURL = MOVIE_IMAGE_URL + posterPath;

  return (
    <div className="w-48  px-4">
      {" "}
      {/* Set a fixed width for the card */}
      <img className="" src={imageURL} alt="movie-pic" />
    </div>
  );
};

export default MovieCard;
