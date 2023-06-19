import { configureStore } from '@reduxjs/toolkit';
import PostsSlice from '../feature/PostSlice';
import UserSlice from '../feature/Users';

const store = configureStore({
  reducer: {
    posts: PostsSlice,
    users: UserSlice,
  },
});

export default store;
