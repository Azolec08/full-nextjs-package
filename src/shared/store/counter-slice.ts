import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterSlice } from "../types";

const initialState: CounterSlice = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1;
    },
    handleDecrement: (state, action: PayloadAction<number>) => {
      state.counter = action.payload;
    },
  },
});

export const { increment, handleDecrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
