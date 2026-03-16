import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Movie } from "../types/movie";

interface GptState {
  showGptSearch: boolean;
  movieResults: Movie[][] | null;
  movieNames: string[] | null;
}

const initialState: GptState = {
  showGptSearch: false,
  movieResults: null,
  movieNames: null,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (
      state,
      action: PayloadAction<{ movieNames: string[]; movieResults: Movie[][] }>
    ) => {
      state.movieNames = action.payload.movieNames;
      state.movieResults = action.payload.movieResults;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
