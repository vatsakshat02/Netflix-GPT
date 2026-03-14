import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import useMovieVideos from "../hooks/useMovieVideos";
interface VideoBackgroundprops {
  movieId: number;
}
const Videobackground = ({ movieId }: VideoBackgroundprops) => {
  const trailerVideo = useSelector(
    (store: RootState) => store.movies?.trailerVideo
  );

  useMovieVideos(movieId);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default Videobackground;
