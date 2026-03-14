import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTrailer } from "../utils/movieSlice";
import { RootState } from "../utils/appStore";
import { API_OPTIONS } from "../utils/constants";
const useMovieVideos = (movieId: number) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter(
      (video: any) => video.type === "Trailer"
    );

    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieVideos;
