import { createSlice } from "@reduxjs/toolkit";

const RepoData = createSlice({
  name: "repo",
  initialState: [],
  reducers: {
    sendRepo: (state, action) => {
      state = [...action.payload];
      return state;
    },
  },
});

export const { sendRepo } = RepoData.actions;
export default RepoData.reducer;
