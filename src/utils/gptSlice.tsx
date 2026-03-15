import { createSlice } from "@reduxjs/toolkit";

interface GptState {
  showGptSearch: boolean;
}

const initialState: GptState = {
  showGptSearch: false,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;

export default gptSlice.reducer;
