import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector(
    (store: RootState) => store.gpt
  );
  if (!movieNames) return null;
  if (!movieResults) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
