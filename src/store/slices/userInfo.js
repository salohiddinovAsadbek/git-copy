import { createSlice } from "@reduxjs/toolkit";

const UserInfo = createSlice({
  name: "info",
  initialState: [],
  reducers: {
    send: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { send } = UserInfo.actions;

export default UserInfo.reducer;
