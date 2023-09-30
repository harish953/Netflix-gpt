import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = (movieName) => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
