import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./reducer";
import { apiSlice } from "./apiSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import dataSlice from "./dataSlice";

const rootReducer = combineReducers({
  login: loginSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
  data: dataSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["data"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);
