import React from "react";
import { useRef } from "react";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef<HTMLInputElement>(null);

  const searchMovie = async (movie: string) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

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

    const gptMovies = gptResults.output_text
      ?.split(",")
      .map((movie) => movie.trim());

    const promiseArray = gptMovies.map((movie) => searchMovie(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
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
