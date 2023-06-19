import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  NewTodos: [
    {
      itemsTodo: 'Eat',
      id: nanoid(),
      TodosCount: 1,
    },
  ],
  AmountOfItems: 0,
  QuantityOfAllItems: 0,
};

const TodosSlice = createSlice({
  name: 'Todos',
  initialState,
  reducers: {
    AddTodo: {
      reducer(state, action) {
        state.NewTodos.push(action.payload);
      },
      prepare(itemsTodo) {
        return {
          payload: {
            itemsTodo,
            id: nanoid(),
            TodosCount: 0,
          },
        };
      },
    },
    increaseCount(state, action) {
      state.NewTodos.TodosCount = state.NewTodos.TodosCount + 1;
    },
    decreaseCount(state) {
      state.TodosCount = state.TodosCount - 1;
    },
    removeTodo(state, action) {
      return state.NewTodos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo(state, action) {
      const { id } = action.payload;
      const todoEdit = state.NewTodos.filter((todos) => todos.id !== id);
      state.NewTodos = [...todoEdit, action.payload];
    },
  },
});

export const selectAllTodos = (state) => state.Todo.NewTodos;
// export const selectAllTodosCount = (state) => state.Todo.TodosCount;
export const selectAmountOfItems = (state) => state.Todo.AmountOfItems;
export const selectQuantityOfAllItems = (state) =>
  state.Todo.QuantityOfAllItems;

export const selectTodoById = (state, todoId) =>
  state.Todo.NewTodos.find((todos) => todos.id === todoId);

export const { AddTodo, increaseCount, decreaseCount, removeTodo, updateTodo } =
  TodosSlice.actions;
export default TodosSlice.reducer;
