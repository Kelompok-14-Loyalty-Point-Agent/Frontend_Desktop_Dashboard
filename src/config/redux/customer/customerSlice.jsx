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
      })
      // GET CUSTOMER

      // UPDATE CUSTOMER
      .addCase(update_customer.pending, (state, action) => {
        return {
          ...state,
          update_customerLoading: true,
          update_customerError: undefined,
          type: action.type,
        };
      })
      .addCase(update_customer.fulfilled, (state, action) => {
        const updatedCustomers = state.customers.map((customer) =>
          customer.id === action.payload.no ? action.payload : customer
        );
        return {
          ...state,
          customers: updatedCustomers,
          update_customerLoading: false,
          update_customerError: undefined,
          type: action.type,
        };
      })
      .addCase(update_customer.rejected, (state, action) => {
        return {
          ...state,
          update_customerLoading: false,
          update_customerError: action.payload,
          type: action.type,
        };
      })
      // UPDATE CUSTOMER

      // DELETE CUSTOMER
      .addCase(delete_customer.pending, (state, action) => {
        return {
          ...state,
          delete_customerLoading: true,
          delete_customerError: undefined,
          type: action.type,
        };
      })
      .addCase(delete_customer.fulfilled, (state, action) => {
        const filteredCustomers = state.customers.filter(
          (customer) => customer.no !== action.payload
        );
        return {
          ...state,
          customers: filteredCustomers,
          delete_customerLoading: false,
          delete_customerError: undefined,
          type: action.type,
        };
      })
      .addCase(delete_customer.rejected, (state, action) => {
        return {
          ...state,
          delete_customerLoading: false,
          delete_customerError: action.payload,
          type: action.type,
        };
      });
    // DELETE CUSTOMER
  },
});

export const { actions: get_customerAction, reducer: get_customerReducer } =
  getCustomerSlice;
