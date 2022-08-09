import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  income: 0,
  expense: 0,
  inTotal: 0,
  exTotal: 0,
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    getData: (state, action) => {
      state = action.payload;
    },
  },
});
export const { getData } = dataSlice.actions;
export default dataSlice.reducer;
