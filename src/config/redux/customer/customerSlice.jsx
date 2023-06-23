import { createSlice } from "@reduxjs/toolkit";
import {
  delete_customer,
  get_customer,
  update_customer,
} from "./customerThunk";

const getCustomerInitState = {
  customers: [],
};

const getCustomerSlice = createSlice({
  name: "getCustomer",
  initialState: getCustomerInitState,
  reducers: {
    setCustomer: (state, action) => {
      return {
        ...state,
        getCustomerInitState: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // GET CUSTOMER
      .addCase(get_customer.pending, (state, action) => {
        return {
          ...state,
          get_customerLoading: true,
          get_customerError: undefined,
          type: action.type,
        };
      })
      .addCase(get_customer.fulfilled, (state, action) => {
        return {
          ...state,
          customers: action.payload,
          get_customerLoading: false,
          get_customerError: undefined,
          type: action.type,
        };
      })
      .addCase(get_customer.rejected, (state, action) => {
        return {
          ...state,
          get_customerLoading: false,
          get_customerError: action.payload,
          type: action.type,
        };
      });
    // GET CUSTOMER
  },
});

export const { actions: get_customerAction, reducer: get_customerReducer } =
  getCustomerSlice;
