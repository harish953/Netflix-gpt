import React from "react";
import { IMAGE_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const Search = () => {
  return (
    <div>
      <div className=" absolute -z-10">
        <img
          className="w-full h-full object-cover"
          src={IMAGE_URL}
          alt="Background"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default Search;
