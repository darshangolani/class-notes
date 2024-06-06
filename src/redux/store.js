import { configureStore } from "@reduxjs/toolkit";
import sampleSlice from "./sampleSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        sample: sampleSlice,
        auth: authSlice
    }
});

export default store;
