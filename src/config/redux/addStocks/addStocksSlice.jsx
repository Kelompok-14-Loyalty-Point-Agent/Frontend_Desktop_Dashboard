import { createSlice } from "@reduxjs/toolkit";
import { add_stock } from "./addStocksThunk";

const addStocksInitState = {
  type: null,
  total_stock: 0,
  provider_id: 0,
};

const addStocksSlice = createSlice({
  name: "addStock",
  initialState: addStocksInitState,
  reducers: {
    setAddStock: (state, action) => {
      return {
        ...state,
        addStocksInitState: action.payload,
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
          addStock: action.payload,
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
      });
  },
});

export const { actions: addStockAction, reducer: addStockReducer } =
  addStocksSlice;
