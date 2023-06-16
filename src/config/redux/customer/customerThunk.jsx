import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_customer = createAsyncThunk(
  "customer/retrieve_customers",
  async () => {
    const res = await axios.get(
      "https://642c551ad7081590f937e674.mockapi.io/customers/products"
    );
    return res.data;
  }
);
