import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";
import SecondaryContainer from "./SecondaryContainer";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie.nowPlayingMovies);
  // useTrailerVideo();
  if (movies === null) return;
  const mainMovies = movies.results[0];
  // console.log(mainMovies);
  const { original_title, overview, id } = mainMovies;
  console.log(id);

  return (
    <div className="md:pt-0  pt-[25%]">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
