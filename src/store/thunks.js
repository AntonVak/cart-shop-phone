import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "home/getProducts",
  async (_, {rejectWithValue} ) => {
    try{
        const response = await axios.get("http://localhost:5000/home");

        return response?.data;
    }catch (err){
        return rejectWithValue(err.message)
    }
    
  }
);
