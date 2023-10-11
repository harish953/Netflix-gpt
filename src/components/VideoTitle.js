import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] md:px-24 absolute bg-gradient-to-r from-black to-transparent opacity-40 ">
      <h1 className="md:text-6xl font-bold m-4 text-white">{title}</h1>
      <p className="md:inline-block hidden m-4 w-1/4 text-lg text-white">
        {overview}
      </p>
      <div>
        <button className="md:m-4 md:px-4 px-3 ml-6 text-xs  p-2 bg-gray-600 text-black bg-white  rounded-md hover:bg-opacity-50">
          ▶️Play
        </button>
        <button className="hidden md:inline-block md:px-4 md:py-2 ml-2 p-2 py-2 text-xs bg-gray-600 rounded-md text-white text-lg marker:rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
