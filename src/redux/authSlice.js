import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { APIGET } from "../utils/api";

// First, create the thunk
export const getQuotes = createAsyncThunk("auth/getQuotes", async () => {
  const response = await APIGET("/quotes");
  console.log("res**", response);
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { fname: "Test", lname: "User" },
    loading: false,
    quotes: {},
  },
  reducers: {
    setAuth(state, action) {
      console.log("red_actions********", current(state), action);
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getQuotes.pending, (state, action) => {
      // Add user to the state array
      console.log("pending*****", action);
      state.loading = true;
    });
    builder.addCase(getQuotes.fulfilled, (state, action) => {
      console.log("fulfill*****", action);
      state.quotes = action.payload;
      state.loading = false;
    });
    builder.addCase(getQuotes.rejected, (state, action) => {
      console.log("rejected*****", action);
      state.loading = false;
      alert(action.error.message);
    });
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
