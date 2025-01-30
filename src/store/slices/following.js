import { createSlice } from "@reduxjs/toolkit";

const Following = createSlice({
  name: "following",
  initialState: [],
  reducers: {
    sendFollowing: (state, action) => {
      state = [...action.payload];
      return state;
    },
  },
});

export default Following.reducer;
export const { sendFollowing } = Following.actions;
