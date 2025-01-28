import { configureStore } from "@reduxjs/toolkit";
import Todo from "./slices/todo";
import UserInfo from "./slices/userInfo";

const store = configureStore({
  reducer: {
    todo: Todo,
    userinfo: UserInfo,
  },
});

export { store };
