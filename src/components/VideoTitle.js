import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold m-4 text-white">{title}</h1>
      <p className="m-4 w-1/4 text-lg text-white">{overview}</p>
      <div>
        <button className="m-4 px-4 py-2 bg-gray-600 text-black bg-white  rounded-md font-bold text-lg hover:bg-opacity-50">
          ▶️Play
        </button>
        <button className="px-4 py-2 bg-gray-600 rounded-md text-white  font-bold text-lg marker:rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
