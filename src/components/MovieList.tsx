import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "../types/movie";

interface movieListProps {
  title: string;
  movies: Movie[] | null;
}
const MovieList = ({ title, movies }: movieListProps) => {
  if (!movies) return null;
  return (
    <div className="px-6 ">
      <h1 className="text-xl md:text-3xl py-2 text-white">{title}</h1>
      <div className=" flex overflow-x-auto scrollbar-hide">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
