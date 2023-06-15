import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getStockCredit = createAsyncThunk(
  "getStockCredit/getStocks",
  async (token) => {
    try {
      const res = await axios.get("http://13.229.84.45/stocks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);
