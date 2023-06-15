import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const add_stock = createAsyncThunk(
  "addStock/add",
  async (param, { getState }) => {
    const state = getState();
    const res = await axios.post("http://13.229.84.45/stocks/add", param, {
      headers: {
        Authorization: `Bearer ${state.session.token}`,
        "Content-Type": "application/json",
      },
    });
    return res.data;
  }
);

export const getStockProvider = createAsyncThunk(
  "addStock/getProvider",
  async (token) => {
    const res = await axios.get("http://13.229.84.45/providers", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
);
