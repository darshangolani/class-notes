import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
  name: "sample",
  initialState: {
    text: "test",
  },
  reducers: {
    setText(state, action) {},
  },
  extraReducers: () => {},
});

export const { setText } = sampleSlice.actions;

export default sampleSlice.reducer;
