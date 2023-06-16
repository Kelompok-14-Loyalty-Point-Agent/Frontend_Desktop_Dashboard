import { createSlice } from "@reduxjs/toolkit";
import { addStockInternetData } from "./addStockInternetDataThunk";

const addInternetDataStockInitState = {
  responseObjectMsg: {},
};

const addStockInternetDataSlice = createSlice({
  name: "addStockInternetData",
  initialState: addInternetDataStockInitState,
  extraReducers: (builder) => {
    builder
      .addCase(addStockInternetData.pending, (state, action) => {
        return {
          ...state,
          addStockInternetLoading: true,
          addStockInternetError: undefined,
          type: action.type,
        };
      })
      .addCase(addStockInternetData.fulfilled, (state, action) => {
        return {
          ...state,
          responseObjectMsg: action.payload,
          addStockInternetLoading: false,
          addStockInternetError: undefined,
          type: action.type,
        };
      })
      .addCase(addStockInternetData.rejected, (state, action) => {
        return {
          ...state,
          addStockInternetLoading: false,
          addStockInternetError: action.payload,
          type: action.type,
        };
      });
  },
});

export const {
  actions: addStockInternetDataAction,
  reducer: addStockInternetDataReducer,
} = addStockInternetDataSlice;
