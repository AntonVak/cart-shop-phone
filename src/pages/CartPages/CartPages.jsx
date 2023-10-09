import { Box, Container, Typography } from "@mui/material";
import Cart from "../../components/Cart/Cart";

const CartPages = () => {
  return (
    <Box component="main" sx={{pt:4}}>
      <Container sx={{maxWidth: 'lg'}}>
        <Typography variant="h3" component="h1" align="center">
          Shoping Cart
        </Typography>
        <Cart/>
      </Container>
    </Box>
  );
};

export default CartPages;
