import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todosSlice";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
