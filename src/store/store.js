import { configureStore } from "@reduxjs/toolkit";
import Todo from "./slices/todo";
import UserInfo from "./slices/userInfo";
import RepoData from "../store/slices/repos";
import Following from "./slices/following";
import Followingers from "../store/slices/followers";

const store = configureStore({
  reducer: {
    todo: Todo,
    userinfo: UserInfo,
    repoData: RepoData,
    following: Following,
    followingers: Followingers,
  },
});

export { store };
