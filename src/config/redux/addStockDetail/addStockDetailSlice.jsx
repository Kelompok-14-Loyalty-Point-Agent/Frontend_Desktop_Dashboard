import { createSlice } from "@reduxjs/toolkit";
import { addStockDetail } from "./addStockDetailThunk";

const addStockDetailInitialState = {
  datas: [],
  inputProvider: {},
};

const addStockDetailSlice = createSlice({
  name: "addStockDetail",
  initialState: addStockDetailInitialState,
  reducers: {
    setInputProvider: (state, action) => {
      return {
        ...state,
        inputProvider: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addStockDetail.pending, (state, action) => {
        return {
          ...state,
          addStockDetailLoading: true,
          addStockDetailError: undefined,
          type: action.type,
        };
      })
      .addCase(addStockDetail.fulfilled, (state, action) => {
        return {
          ...state,
          datas: action.payload,
          addStockDetailLoading: false,
          addStockDetailError: undefined,
          type: action.type,
        };
      })
      .addCase(addStockDetail.rejected, (state, action) => {
        return {
          ...state,
          addStockDetailLoading: false,
          addStockDetailError: action.payload,
          type: action.type,
        };
      });
  },
});

export const { actions: addStockDetailAction, reducer: addStockDetailReducer } =
  addStockDetailSlice;
