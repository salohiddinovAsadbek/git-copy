import { configureStore } from "@reduxjs/toolkit";
import Todo from "./slices/todo";
import UserInfo from "./slices/userInfo";
import RepoData from "../store/slices/repos";

const store = configureStore({
  reducer: {
    todo: Todo,
    userinfo: UserInfo,
    repoData: RepoData,
  },
});

export { store };
