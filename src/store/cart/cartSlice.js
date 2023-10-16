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
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      localStorage.setItem("cartItems", JSON.stringify(state.items));

      toast.error("removed from cart", {
        position: "bottom-left",
        autoClose: 1000,
      });
    },
    incriment: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, cartQuantity: item.cartQuantity + 1 };
        } else {
          return item;
        }
      });
    },
    decrement: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      // console.log(itemId);
      console.log(itemIndex);
      if (itemIndex !== -1) {
        if (state.items[itemIndex].cartQuantity > 1) {
          // Если количество больше 1, уменьшаем на 1
          state.items[itemIndex].cartQuantity -= 1;
        } else {
          // Если количество 1, удаляем позицию из корзины
          state.items.splice(itemIndex, 1);
        }
      }
      // state.items = state.items.map((item) => {
      //   if (item.id === action.payload) {
      //     return { ...item, cartQuantity: item.cartQuantity - 1 };
      //   } else {
      //     return item;
      //   }
      // });
    },
    clearCart: (state) => {
      state.items = [];
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    }

  },
});

export const { addItem, removeFromCart, incriment, decrement, clearCart, setTotalPrice } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
