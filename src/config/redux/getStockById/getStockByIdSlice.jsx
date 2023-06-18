import { createSlice } from "@reduxjs/toolkit";
import { getStockDetail } from "./getStockDetailThunk";

const getStockDetailInitialState = {
  datas: [],
};

const getStockDetailSlice = createSlice({
  name: "getStockDetail",
  initialState: getStockDetailInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(getStockDetail.pending, (state, action) => {
        return {
          ...state,
          getStockDetailLoading: true,
          getStockDetailError: undefined,
          type: action.type,
        };
      })
      .addCase(getStockDetail.fulfilled, (state, action) => {
        return {
          ...state,
          datas: action.payload,
          getStockDetailLoading: false,
          getStockDetailError: undefined,
          type: action.type,
        };
      })
      .addCase(getStockDetail.rejected, (state, action) => {
        return {
          ...state,
          getStockDetailLoading: false,
          getStockDetailError: action.payload,
          type: action.type,
        };
      });
  },
});

export const { actions: getStockDetailAction, reducer: getStockDetailReducer } =
  getStockDetailSlice;
