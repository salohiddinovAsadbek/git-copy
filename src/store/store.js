import { configureStore } from "@reduxjs/toolkit";
import Todo from "./slices/todo";
import UserInfo from "./slices/userInfo";
import RepoData from "../store/slices/repos";
import Following from "./slices/following";

const store = configureStore({
  reducer: {
    todo: Todo,
    userinfo: UserInfo,
    repoData: RepoData,
    following: Following,
  },
});

export { store };
