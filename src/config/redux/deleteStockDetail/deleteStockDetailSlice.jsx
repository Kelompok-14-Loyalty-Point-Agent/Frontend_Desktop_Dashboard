import { createSlice } from "@reduxjs/toolkit";
import { deleteStockDetail } from "./deleteStockDetailThunk";

const deleteStockInitState = {
  datas: [],
};

const deleteStockDetailSlice = createSlice({
  name: "deleteStockDetail",
  initialState: deleteStockInitState,
  extraReducers: (builder) => {
    builder
      .addCase(deleteStockDetail.pending, (state, action) => {
        return {
          ...state,
          deleteStockDetailLoading: true,
          deleteStockDetailError: undefined,
          type: action.type,
        };
      })
      .addCase(deleteStockDetail.fulfilled, (state, action) => {
        return {
          ...state,
          datas: action.payload,
          deleteStockDetailLoading: false,
          deleteStockDetailError: undefined,
          type: action.type,
        };
      })
      .addCase(deleteStockDetail.rejected, (state, action) => {
        return {
          ...state,
          deleteStockDetailLoading: false,
          deleteStockDetailError: action.payload,
          type: action.type,
        };
      });
  },
});

export const {
  actions: deleteStockDetailAction,
  reducer: deleteStockDetailReducer,
} = deleteStockDetailSlice;
