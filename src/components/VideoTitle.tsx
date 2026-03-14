import React from "react";

interface VideoTitleProps {
  title: string;
  overview: string;
}

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="w-screen aspect-video absolute pt-[23%] px-14 bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-14 text-xl bg-opacity-85 rounded-lg mr-2 hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="bg-white text-black p-4 px-12 text-xl bg-opacity-85 rounded-lg hover:bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
