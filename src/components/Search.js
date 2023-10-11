import React from "react";
import { IMAGE_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const Search = () => {
  return (
    <div className="relative">
      <img
        className="absolute inset-0 w-full h-screen object-cover -z-10 bg-repeat-y"
        src={IMAGE_URL}
        alt="Background"
      />
      <div className="pt-[30%] md:pt-[10%]">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default Search;
