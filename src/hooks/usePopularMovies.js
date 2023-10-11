import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    // const data = await fetch(
    //   "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    //   API_OPTIONS
    // );
    // const json = await data.json();
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2ExYjBjMzg3ZDZiNThjMzM4N2I3YmM0NWY4MDY2MCIsInN1YiI6IjY1MTQyYzE0YTE5OWE2MDBjNDljMTI0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jm39UP_WvzxhyqXJ8DnbJaTeEkxi160d09KDflLmi3Q",
      },
    };

    const data = await axios.request(options);

    dispatch(addPopularMovies(data.data));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
