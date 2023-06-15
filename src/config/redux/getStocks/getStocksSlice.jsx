import { createSlice } from "@reduxjs/toolkit";
import { getStockCredit } from "./getStocksThunk";

const getStocksInitState = {
  stockCreditValue: null,
};

const getStocksSlice = createSlice({
  name: "getStocks",
  initialState: getStocksInitState,
  reducers: {
    setGetStockCredit: (state, action) => {
      return {
        ...state,
        stockCreditValue: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStockCredit.pending, (state, action) => {
        return {
          ...state,
          stockCreditLoading: true,
          stockCreditError: undefined,
          type: action.type,
        };
      })
      .addCase(getStockCredit.fulfilled, (state, action) => {
        return {
          ...state,
          stockCreditValue: action.payload,
          stockCreditLoading: false,
          stockCreditError: undefined,
          type: action.type,
        };
      })
      .addCase(getStockCredit.rejected, (state, action) => {
        return {
          ...state,
          stockCreditLoading: false,
          stockCreditError: action.payload,
          type: action.type,
        };
      });
  },
});

export const { actions: getStocksAction, reducer: getStocksReducer } =
  getStocksSlice;
