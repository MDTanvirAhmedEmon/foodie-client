import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import cartReducer from "./features/cart/cartSlice";
import tokenReducer from "./features/user/tokenSlice";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    userToken: tokenReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
