import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import booksApi from "./books/booksApi";

export const store = configureStore({
  reducer: { cart: cartReducer, [booksApi.reducerPath]: booksApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});
