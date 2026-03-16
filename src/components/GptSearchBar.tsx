import React from "react";
import { useRef } from "react";
import client from "../utils/openai";

const GptSearchBar = () => {
  const searchText = useRef<HTMLInputElement>(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current?.value);

    const gptResults = await client.responses.create({
      model: "gpt-5.2",
      instructions: "You are a movie recommendation system",
      input:
        "Suggest movies similar to: " +
        searchText.current?.value +
        ". only give me names of 5 Movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya",
    });

    if (!gptResults.output_text) {
      //TODO error handling
    }

    const gptMovies = gptResults.output_text?.[0]?.message?.content?.split(",");
  };

  return (
    <div className="pt-[20%] flex flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What do you want to watch today ?"
        />
        <button
          className="col-span-3 m-4 px-4 py-2 bg-red-700 text-white rounded-lg "
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
