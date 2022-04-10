import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const productReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({ id: action.payload.id, todo: action.payload.todo });
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
    updateTodo(state, action) {
      const { id, todo } = action.payload;
        const a = state.todos.findIndex((boj) => boj.id === id);
       state.todos[a].todo = todo;
    
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = productReducer.actions;
export default productReducer.reducer;
