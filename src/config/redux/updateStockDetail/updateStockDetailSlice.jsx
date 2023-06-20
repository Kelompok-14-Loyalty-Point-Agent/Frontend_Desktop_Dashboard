import { createSlice } from "@reduxjs/toolkit";
import { updateStock } from "./updateStockDetailThunk";

const updateStockDetailInitState = { datas: [] };

const updateDataStockSlice = createSlice({
  name: "updateStockDetail",
  initialState: updateStockDetailInitState,
  extraReducers: (builders) => {
    builders
      .addCase(updateStock.pending, (state, action) => {
        return {
          ...state,
          updateStockLoading: true,
          updateStockError: undefined,
          type: action.type,
        };
      })
      .addCase(updateStock.fulfilled, (state, action) => {
        return {
          ...state,
          datas: action.payload,
          updateStockLoading: undefined,
          updateStockError: false,
          type: action.type,
        };
      })
      .addCase(updateStock.rejected, (state, action) => {
        return {
          ...state,
          updateStockLoading: undefined,
          updateStockError: action.payload,
          type: action.type,
        };
      });
  },
});

export const {
  actions: updateDataStockAction,
  reducer: updateDataStockReducer,
} = updateDataStockSlice;
