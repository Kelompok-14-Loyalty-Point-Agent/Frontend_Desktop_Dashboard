import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const get_customer = createAsyncThunk(
//   "customer/get_customers",
//   async () => {
//     const res = await axios.get(
//       "https://642c551ad7081590f937e674.mockapi.io/customers/products"
//     );
//     return res.data;
//   }
// );

export const get_customer = createAsyncThunk(
  "customer/retrieve_customers",
  async (_, { getState }) => {
    const state = getState();
    try {
      const res = await axios.get("https://3.0.59.152.nip.io/users/customers", {
        headers: { Authorization: `Bearer ${state.session.token}` },
      });
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const update_customer = createAsyncThunk(
  "customer/update_customer",
  async (customer) => {
    const { no, ...data } = customer;
    const res = await axios.put(
      `https://642c551ad7081590f937e674.mockapi.io/customers/products/${no}`,
      data
    );
    return res.data;
  }
);

export const delete_customer = createAsyncThunk(
  "customer/delete_customer",
  async (no) => {
    await axios.delete(
      `https://642c551ad7081590f937e674.mockapi.io/customers/products/${no}`
    );
    return no;
  }
);
