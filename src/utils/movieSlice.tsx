import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../types/movie";

export interface Trailer {
  id: string;
  key: string;
  name: string;
  type: string;
}

interface MovieState {
  nowPlayingMovies: Movie[] | null;
  trailerVideo: Trailer | null;
}

const initialState: MovieState = {
  nowPlayingMovies: null,
  trailerVideo: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addnowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action: PayloadAction<Trailer>) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const { addnowPlayingMovies, addTrailer } = movieSlice.actions;
export default movieSlice.reducer;
