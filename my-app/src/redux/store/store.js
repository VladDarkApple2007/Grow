import { configureStore } from "@reduxjs/toolkit";
import cartrReducer from "../slice/cartSlice";
import stateBtnReducer from "../slice/stateBtnSlice";
import { apiSlice } from "../slice/apiSlice.js";
export const store = configureStore({
  reducer: {
    cart: cartrReducer,
    stateBtn: stateBtnReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // ← додаємо middleware RTK Query
});
