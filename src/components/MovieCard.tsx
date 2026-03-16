import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Movie } from "../types/movie";
interface MovieCardProps {
  posterPath: string;
}

const MovieCard = ({ posterPath }: MovieCardProps) => {
  if (!posterPath) return null;
  return (
    <div className="w-40 md:w-48 pr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
