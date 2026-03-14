import React from "react";

interface VideoTitleProps {
  title: string;
  overview: string;
}

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="pt-36 px-12 absolute my-40 bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-4 px-14 text-xl bg-opacity-50 rounded-lg mr-2">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
