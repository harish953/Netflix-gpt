import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[5%] flex justify-center">
      <form className=" w-1/2  text-center bg-transparent">
        <input
          className=" w-2/3 px-10 py-2 m-4 rounded-full outline-none "
          type="text"
          placeholder={lang[langKey].gptSearchHolder}
        ></input>
        <button className="bg-red-600 py-2 px-8 hover:bg-red-800 rounded-full text-white">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
