import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { decrement, incriment } from "../../store/cart/cartSlice";

const CartQuantity = ({id, cartQuantity}) => {
  
  const dispatchFunc = useDispatch();

  const handleIncrease = () => {
    dispatchFunc(incriment(id));
   
  };
  const handleDecrease = () => {
    dispatchFunc(decrement(id));
   
  };

  return (
    <Box sx={{  p: 2, display: "flex" }} >
      <Button onClick={handleDecrease} sx={{ justifyContent: "center", alignItems: "center" }} >
        -
      </Button>
      <p>{cartQuantity}</p>
      <Button onClick={handleIncrease} >
        +
      </Button>
    </Box>
  );
};

export default CartQuantity;
