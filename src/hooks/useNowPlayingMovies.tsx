import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { addnowPlayingMovies } from "../utils/movieSlice";
import { RootState } from "../utils/appStore";

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(
    (store: RootState) => store.movies.nowPlayingMovies
  );
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addnowPlayingMovies(json.results));
  };

  useEffect(() => {
    if (!nowPlayingMovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
