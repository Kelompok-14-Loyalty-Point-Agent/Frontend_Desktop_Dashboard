import { createSlice } from "@reduxjs/toolkit";
import { getStockInternetData } from "./getStockInternetDataThunk";

const getStockInternetDataInitState = {
  stockInternetDataValue: [],
};

const getStockInternetDataSlice = createSlice({
  name: "getStockInternetData",
  initialState: getStockInternetDataInitState,
  reducers: {
    setGetStockInternetData: (state, action) => {
      return {
        ...state,
        stockInternetDataValue: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStockInternetData.pending, (state, action) => {
        return {
          ...state,
          stockInternetDataLoading: true,
          stockInternetDataError: undefined,
          type: action.type,
        };
      })
      .addCase(getStockInternetData.fulfilled, (state, action) => {
        return {
          ...state,
          stockInternetDataValue: action.payload,
          stockInternetDataLoading: false,
          stockInternetDataError: undefined,
          type: action.type,
        };
      })
      .addCase(getStockInternetData.rejected, (state, action) => {
        return {
          ...state,
          stockInternetDataLoading: false,
          stockInternetDataError: action.payload,
          type: action.type,
        };
      });
  },
});

export const {
  actions: getStockInternetDataAction,
  reducer: getStockInternetDataReducer,
} = getStockInternetDataSlice;
