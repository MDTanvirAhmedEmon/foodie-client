import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import cartReducer from "./features/cart/cartSlice";
import tokenReducer from "./features/user/tokenSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage,
  blacklist: ["api","orderSlice"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  userToken: tokenReducer,
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export const persistor = persistStore(store)