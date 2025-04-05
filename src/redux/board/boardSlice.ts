import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "Новая";

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    changeBoard: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

export const { changeBoard } = boardSlice.actions;
export default boardSlice.reducer;
