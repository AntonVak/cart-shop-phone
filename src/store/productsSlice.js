import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./thunks";

const initialState = {
  items: [],
  status: null,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(getProducts.pending, (state) => {
      state.status = "pending";
    }).addCase(getProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload;
    })
    .addCase(getProducts.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload
      
    })
});
//pending - ожидание
//fulfilled - выполнено
export const productsReducer = productsSlice.reducer;
