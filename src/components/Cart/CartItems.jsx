import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { styles } from "./CartGlobalStyle";
import CartQuantity from "./CartQuantity";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cart/cartSlice";

const CartItems = ({ item }) => {
  const { id, name, desc, price, image } = item;

  const dispatchFunc = useDispatch();

  const handlerDelete = () => {
    dispatchFunc(removeFromCart(id));
  };

  return (
    <Card sx={{ width: "100%", p: 2, display: "flex" }}>
      <CardMedia component="img" sx={styles.img} image={image} alt={name} />
      <Box sx={{ pl: 4, width: "32rem" }}>
        <Typography component="div" sx={styles.nameTitle}>
          {name}
        </Typography>
        <Typography component="p" sx={styles.descTitle}>
          {desc}
        </Typography>
        <Button
          size="small"
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={handlerDelete}
        >
          Delete
        </Button>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Typography component="div" sx={styles.price}>
          ${price}
        </Typography>
        <CartQuantity />
        <Typography component="div">Total</Typography>
      </Box>
    </Card>
  );
};
// CartItems.propTypes = {
//   name: PropTypes.string.isRequired
// }

export default CartItems;
