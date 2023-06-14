import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signin = createAsyncThunk("session/signin", async (param) => {
  try {
    const res = await axios.post("http://13.229.84.45/auth/login", param);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
});
