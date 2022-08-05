import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  transaction: [],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    getTransaction: (state) => {},
  },
});

export const { getTransaction } = expenseSlice.actions;
export default expenseSlice.reducer;
