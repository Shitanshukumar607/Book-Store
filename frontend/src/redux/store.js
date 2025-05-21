import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import booksApi from "./books/booksApi";
import ordersApi from "./orders/ordersApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
});
