import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import { openai } from "../utils/openai";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef();

  //search movie
  const searchTMDBMovie = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };
  const handleGptSearch = async () => {
    // console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie recommend system and suggest movie for query:" +
      searchText.current.value +
      ". Only give me names of five movies and comma separated list the example given ahead. example: Gadar,3 idiots,koi mil gaya";
    const result = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // console.log(result.choices);
    const gptMovies = result.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchTMDBMovie(movie));

    const tmdbResult = await Promise.all(promiseArray);
    // console.log(tmdbResult);

    dispatch(
      addGptMovieResults({ movieResults: tmdbResult, movieNames: gptMovies })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2  text-center bg-transparent"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          className=" md:w-2/3 w-3/4 px-10 py-2 m-4 rounded-full outline-none "
          type="text"
          placeholder={lang[langKey].gptSearchHolder}
        ></input>
        <button
          className="bg-red-600 py-2 px-8 hover:bg-red-800 rounded-full text-white"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
