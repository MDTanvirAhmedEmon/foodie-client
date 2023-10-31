import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/apiSlice'
import cartReducer from './features/cart/cartSlice'
import userReducer from './features/user/userSlice'




export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
})