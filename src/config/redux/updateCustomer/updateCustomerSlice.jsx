import { createSlice } from "@reduxjs/toolkit";
import { updateCustomer } from "./updateCustomerThunk";

const updateCustomerDetailInitState = {
  dataCustomer: [],
};

const updateCustomerDetailSlice = createSlice({
  name: "updateCustomerDetail",
  initialState: updateCustomerDetailInitState,
  extraReducers: (builders) => {
    builders
      .addCase(updateCustomer.pending, (state, action) => {
        return {
          ...state,
          updateCustomerLoading: true,
          updateCustomerError: undefined,
          type: action.type,
        };
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        return {
          ...state,
          dataCustomer: action.payload,
          updateCustomerLoading: undefined,
          updateCustomerError: false,
          type: action.type,
        };
      })
      .addCase(updateCustomer.rejected, (state, action) => {
        return {
          ...state,
          updateCustomerLoading: undefined,
          updateCustomerError: action.payload,
          type: action.type,
        };
      });
  },
});
export const { actions: updateCustomerAction, reducer: updateCustomerReducer } =
  updateCustomerDetailSlice;
