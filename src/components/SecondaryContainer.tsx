import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState } from "../utils/appStore";

const SecondaryContainer = () => {
  const movies = useSelector((store: RootState) => store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-44 relative z-20 pl-8">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
      {/*
    Movielist - Popular
      MovieCard*n
    MovieList - Now Playing
    MovieList - Trending
    MovieList - Horror
    */}
    </div>
  );
};

export default SecondaryContainer;
