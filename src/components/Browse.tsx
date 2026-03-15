import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";

const Browse = () => {
  useNowPlayingMovies();

  const gptSearch = useSelector((store: RootState) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {gptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/*
        Main Container
          - VideoBackground
          - VideoTitle
        Secondary Container
          - MovieList * n
          - cards * n
      */}
    </div>
  );
};
export default Browse;
