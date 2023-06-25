import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateCustomer = createAsyncThunk(
  "updateCustomerDetail/updateData",
  async ({ id, email, phone }, { getState }) => {
    const state = getState();
    const token = state.session.token;
    try {
      const res = await axios.put(
        `https://3.0.59.152.nip.io/users/profiles/customer/edit/${id}`,
        { email, phone },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);
