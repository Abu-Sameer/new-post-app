import { createSlice, nanoid } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'users',
  initialState: [
    { id: nanoid(), name: 'Khan' },
    { id: nanoid(), name: 'Kapoor' },
    { id: nanoid(), name: 'Sharukh' },
    { id: nanoid(), name: 'Saif Ali' },
    { id: nanoid(), name: 'Jakie' },
  ],
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default UserSlice.reducer;
