import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todosSlice";
import boardReducer from "./board/boardSlice";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    boards: boardReducer,
  },
});
