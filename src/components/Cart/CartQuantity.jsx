// import { useDispatch } from "react-redux";
// import { decrement, increment } from "../../store/cart/cartSlice";

import { Box, Button } from "@mui/material";
import { useCart } from "../../hooks/useCart";


const CartQuantity = () => {
  const {totalQuantity} = useCart();
  // const funcDispatch = useDispatch();

  // const handleIncrease = () => {
  //   funcDispatch(increment(id));
   
  // };
  // const handleDecrease = () => {
  //   funcDispatch(decrement(id));
   
  // };

  return (
    <Box sx={{  p: 2, display: "flex" }} >
      <Button sx={{ justifyContent: "center", alignItems: "center" }} >
        -
      </Button>
      <p>{totalQuantity}</p>
      <Button >
        +
      </Button>
    </Box>
  );
};

export default CartQuantity;
