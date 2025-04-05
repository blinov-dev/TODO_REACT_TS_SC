import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeTodo } from "../../types";

const initialState: typeTodo[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: typeTodo = {
        id: Date.now().toString(),
        text: action.payload,
        status: "Новая",
      };
      state.push(newTodo);
    },
    changeTodoText: (state, action: PayloadAction<typeTodo>) => {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    changeTodoStatus: (
      state,
      action: PayloadAction<{ id: string; status: string }>
    ) => {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.status = action.payload.status;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        return state.filter((i) => i.id !== todo.id);
      }
    },
  },
});

export const { addTodo, changeTodoText, changeTodoStatus, deleteTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
