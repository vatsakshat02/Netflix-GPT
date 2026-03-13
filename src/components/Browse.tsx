import React from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../utils/movieSlice";
const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json);
    dispatch(addnowPlayingMovies(json.results));
  };

  useEffect(() => {}, []);
  getNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};
export default Browse;
