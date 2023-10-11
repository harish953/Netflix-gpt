import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const VideoBackground = (movieId) => {
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);
  const [isMuted, setIsMuted] = useState(true);
  // console.log(movieId.movieId);
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  // console.log(trailerVideo);
  // if (trailerVideo == null) return;
  const videoUrl =
    "https://www.youtube.com/embed/" +
    movieId.movieId +
    "?si=" +
    trailerVideo?.key +
    (isMuted ? "&mute=1" : "") +
    "&autoplay=true";
  console.log(videoUrl);
  return (
    <div className=" w-full">
      {/* Mute/Unmute button */}
      <button
        className="bg-transparent text-slate-400 p-2 rounded-md absolute left-[50%] top-[30%] md:bottom-36 md:left-[90%] text-2xl right-4 z-30"
        onClick={toggleMute}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/QF-oyCwaArU?si=9USs4_Qj2KdHyE1C" +
          (isMuted ? "&mute=1" : "") +
          "&autoplay=true"
        }
        autoPlay
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
