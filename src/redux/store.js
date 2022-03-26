import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./features/postSlice";
import userReducer from "./features/user";
import usersReducer from "./features/Users";

export default configureStore({
  reducer: {
    post: PostReducer,
    user: userReducer,
    users: usersReducer,
  },
});
