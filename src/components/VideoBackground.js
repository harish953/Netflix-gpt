import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useTrailerVideo(movieId);
  return (
    <div className="w-full h-full ">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/4wxyy8Rcz4k?si=" +
          trailerVideo?.key +
          "&autoplay=true&mute=1"
        }
        autoPlay
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
