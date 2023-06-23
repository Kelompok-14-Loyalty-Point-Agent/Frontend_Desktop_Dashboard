import { createSlice } from "@reduxjs/toolkit";
import { deleteCustomer } from "./deleteCustomerThunk";

const deleteCustomerInitState = {
  dataCustomer: [],
};

const deleteCustomerSlice = createSlice({
  name: "deleteCustomerData",
  initialState: deleteCustomerInitState,
  extraReducers: (builders) => {
    builders
      .addCase(deleteCustomer.pending, (state, action) => {
        return {
          ...state,
          deleteCustomerLoading: true,
          deleteCustomerError: undefined,
          type: action.type,
        };
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        return {
          ...state,
          datas: action.payload,
          deleteCustomerLoading: false,
          deleteCustomerError: undefined,
          type: action.type,
        };
      })
      .addCase(deleteCustomer.rejected, (state, action) => {
        return {
          ...state,
          deleteCustomerLoading: false,
          deleteCustomerError: action.payload,
          type: action.type,
        };
      });
  },
});
export const { actions: deleteCustomerAction, reducer: deleteCustomerReducer } =
  deleteCustomerSlice;
