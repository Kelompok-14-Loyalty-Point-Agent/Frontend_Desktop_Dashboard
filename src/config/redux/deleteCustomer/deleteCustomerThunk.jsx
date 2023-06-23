import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteCustomer = createAsyncThunk(
  "deleteCustomerData/deleteCustomer",
  async (id, { getState }) => {
    const state = getState();
    const token = state.session.token;
    try {
      const res = axios.delete(
        `https://3.0.59.152.nip.io/users/customers/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);
