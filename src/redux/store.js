import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/todo";

const store = configureStore({
  reducer: {
    todo_data: productReducer,
  },
});

export default store;
