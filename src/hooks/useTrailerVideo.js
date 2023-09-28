import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movieId) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2ExYjBjMzg3ZDZiNThjMzM4N2I3YmM0NWY4MDY2MCIsInN1YiI6IjY1MTQyYzE0YTE5OWE2MDBjNDljMTI0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jm39UP_WvzxhyqXJ8DnbJaTeEkxi160d09KDflLmi3Q",
      },
    };

    const data = await axios.request(options);
    // const json = await data.json();
    const filterData = data.data.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer =
      filterData.length > 0 ? filterData[0] : data.data.results[0];

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useTrailerVideo;
