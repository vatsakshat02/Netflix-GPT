import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Movie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
}

interface MovieState {
  nowPlayingMovies: Movie[] | null;
}

const initialState: MovieState = {
  nowPlayingMovies: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addnowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});
export const { addnowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;
