import { createSlice } from "@reduxjs/toolkit";
import { add_stock, getStockProvider } from "./addStocksThunk";

const addStocksInitState = {
  responseObj: {},
  providers: [],
};

const addStocksSlice = createSlice({
  name: "addStock",
  initialState: addStocksInitState,
  reducers: {
    setAddStock: (state, action) => {
      return {
        ...state,
        responseObj: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(add_stock.pending, (state, action) => {
        return {
          ...state,
          addStockLoading: true,
          addStockError: undefined,
          type: action.type,
        };
      })
      .addCase(add_stock.fulfilled, (state, action) => {
        return {
          ...state,
          responseObj: action.payload,
          addStockLoading: false,
          addStockError: undefined,
          type: action.type,
        };
      })
      .addCase(add_stock.rejected, (state, action) => {
        return {
          ...state,
          addStockLoading: false,
          addStockError: action.payload,
          type: action.type,
        };
      })
      .addCase(getStockProvider.pending, (state, action) => {
        return {
          ...state,
          getStockProviderLoading: true,
          getStockProviderError: undefined,
          type: action.type,
        };
      })
      .addCase(getStockProvider.fulfilled, (state, action) => {
        return {
          ...state,
          providers: action.payload,
          getStockProviderLoading: false,
          getStockProviderError: undefined,
          type: action.type,
        };
      })
      .addCase(getStockProvider.rejected, (state, action) => {
        return {
          ...state,
          getStockProviderLoading: false,
          getStockProviderError: action.payload,
          type: action.type,
        };
      });
  },
});

export const { actions: addStockAction, reducer: addStockReducer } =
  addStocksSlice;
