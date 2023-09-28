import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className=" w-full">
      {/* Mute/Unmute button */}
      <button
        className="bg-transparent text-gray-400 p-2 rounded-md absolute bottom-36 text-2xl right-4 z-30"
        onClick={toggleMute}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/4wxyy8Rcz4k?si=" +
          trailerVideo?.key +
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
