import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[20%] flex flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What do you want to watch today ?"
        />
        <button className="col-span-3 m-4 px-4 py-2 bg-red-700 text-white rounded-lg ">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
