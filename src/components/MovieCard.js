import React from "react";
import { MOVIE_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  const imageURL = MOVIE_IMAGE_URL + posterPath;
  if (!posterPath) return null;
  return (
    <div className="md:w-48 w-36  px-4">
      {" "}
      {/* Set a fixed width for the card */}
      <img className="" src={imageURL} alt="movie-pic" />
    </div>
  );
};

export default MovieCard;
