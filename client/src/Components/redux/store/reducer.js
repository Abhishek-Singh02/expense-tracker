import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "0",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getLogin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getLogin } = loginSlice.actions;
export default loginSlice.reducer;
