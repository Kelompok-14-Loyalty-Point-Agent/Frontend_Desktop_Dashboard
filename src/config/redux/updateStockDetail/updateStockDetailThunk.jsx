import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateStock = createAsyncThunk(
  "updateStockDetail/updateData",
  async (param, { getState }) => {
    const state = getState();
    const token = state.session.token;
    try {
      const res = await axios.put(
        `https://3.0.59.152.nip.io/stocks/details/${param.id}`,
        param,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);
