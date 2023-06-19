import { createSlice, nanoid } from '@reduxjs/toolkit';

const PostsSlice = createSlice({
  name: 'post',
  initialState: [],
  reducers: {
    AddPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            title,
            content,
            userId,
            date: new Date().toISOString(),
            id: nanoid(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              perfect: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    addReaction(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    removePost(state, action) {
      return state.filter((post) => post.id !== action.payload);
    },
    updatePost(state, action) {
      const { id } = action.payload;
      action.payload.date = new Date().toISOString();
      const posts = state.filter((post) => post.id !== id);
      return [...posts, action.payload];
    },
  },
});

export const selectAllPost = (state) => state.posts;
export const { AddPost, addReaction, removePost, updatePost } =
  PostsSlice.actions;
export const selectPostById = (state, postId) =>
  state.posts.find((post) => post.id === postId);
export default PostsSlice.reducer;
