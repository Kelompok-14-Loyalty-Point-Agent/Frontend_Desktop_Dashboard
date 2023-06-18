import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const add_stock = createAsyncThunk(
  "addStock/add",
  async (param, { getState }) => {
    const state = getState();
    const res = await axios.post(
      "https://3.0.59.152.nip.io/stocks/add",
      param,
      {
        headers: {
          Authorization: `Bearer ${state.session.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  }
);

export const getStockProvider = createAsyncThunk(
  "addStock/getProvider",
  async (_, { getState }) => {
    const state = getState();
    const res = await axios.get("http://13.229.84.45/providers", {
      headers: {
        Authorization: `Bearer ${state.session.token}`,
      },
    });
    return res.data;
  }
);
