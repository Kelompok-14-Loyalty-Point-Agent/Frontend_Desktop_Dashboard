import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const add_stock = createAsyncThunk("addStock/add", async (param) => {
  const res = await axios.post("http://13.229.84.45/stocks", param);
  return res.data;
});

export const add_stock_axios = async (param) => {
  const res = await axios.post("http://13.229.84.45/stocks", param);
  const data = await res.json();
};
