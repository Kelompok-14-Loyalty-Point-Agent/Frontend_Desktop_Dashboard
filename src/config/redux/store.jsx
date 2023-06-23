import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "session",
    "addStock",
    "getStockCredit",
    "getStockInternetData",
    "addStockInternetData",
    "getStockDetail",
    "deleteStockDetail",
    "updateStockDetail",
    "getTotalStockByProvider",
    "getProfile",
  ],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});

export const persiststore = persistStore(store);

export default store;
