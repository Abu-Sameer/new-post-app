import { configureStore } from '@reduxjs/toolkit';
import TodosSlice from '../features/TodoSlice';

const Stores = configureStore({
  reducer: {
    Todo: TodosSlice,
  },
});

export default Stores;
