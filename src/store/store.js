import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice"; // Assuming that movieSlice.js exports the reducer directly

export const store = configureStore({
    reducer: {
      movies: movieReducer, // Use the reducer returned by movieSlice
    }
});