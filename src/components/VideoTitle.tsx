import React from "react";

interface VideoTitleProps {
  title: string;
  overview: string;
}

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="w-screen aspect-video absolute pt-[23%] px-6 md:px-14 bg-gradient-to-r from-black">
      <h1 className="text-2xl font-bold md:text-6xl text-white">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4 text-white">
        {overview}
      </p>
      <div>
        <button className="bg-white text-black py-2 md:py-4 px-4 md:px-14 text-xl bg-opacity-85 rounded-lg mr-2 hover:bg-opacity-70 mt-3 md:mt-0">
          ▶️ Play
        </button>
        <button className=" hidden md:inline-block bg-white text-black p-4 px-6 md:px-12 text-xl bg-opacity-85 rounded-lg hover:bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
