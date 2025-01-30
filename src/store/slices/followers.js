import { createSlice } from "@reduxjs/toolkit";

const Followingers = createSlice({
  name: "following",
  initialState: [],
  reducers: {
    sendFollowingers: (state, action) => {
      state = [...action.payload];
      return state;
    },
  },
});

export default Followingers.reducer;
export const { sendFollowingers } = Followingers.actions;
