import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/apiSlice'
import cartReducer from './features/cart/cartSlice'




export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
})