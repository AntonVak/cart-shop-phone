import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemId = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemId >= 0) {
        state.items[itemId].cartQuantity += 1;
        toast.info("quantity +1", {
          position: "bottom-right",
          autoClose: 1000,
          theme: "colored",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.items.push(tempProduct);
        toast.success("added to cart", {
          position: "bottom-right",
          autoClose: 1000,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const { addItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
