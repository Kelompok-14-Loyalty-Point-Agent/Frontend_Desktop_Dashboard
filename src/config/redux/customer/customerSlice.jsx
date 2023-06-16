import { createSlice } from "@reduxjs/toolkit";
import { get_customer } from "./customerThunk";

const getCustomerInitState = {
  customers: [],
  // name: "",
  // transaction_made: "",
  // total_tpoint: "",
  // image: "",
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
  },
});

export const { actions: get_customerAction, reducer: get_customerReducer } =
  getCustomerSlice;
