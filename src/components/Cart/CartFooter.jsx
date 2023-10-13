import { Box, Button, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { LinkStyle, styles } from "./CartFooterStyle";
import { useCart } from "../../hooks/useCart";

const CartFooter = () => {
   const {totalPrice, totalQuantity} = useCart();
  return (
    <Box sx={styles.footerWr}>
      <div>
        <Button sx={styles.btnClear} variant="outlined">
          Clear Cart
        </Button>
      </div>
      <Box sx={{ width: "25rem" }}>
        <Box sx={styles.total}>
          <Typography component="div" sx={{ fontWeight: "500" }}>
            SubTotal:
          </Typography>
          <Typography component="p" sx={{ fontWeight: "600" }}>
            ${totalPrice}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "1.3rem", color: "#B7B5B3", mt: 1 }}>
          Taxes and shipping
        </Typography>
        <Button sx={styles.btnCheck} variant="contained">
          Check Out
        </Button>
        <Box sx={styles.continiuShopping}>
          <LinkStyle to="/home">
            <ArrowRightAltIcon sx={styles.arrow} />
            <Typography component="span" sx={styles.span}>Continue Shopping</Typography>
          </LinkStyle>
        </Box>
      </Box>
    </Box>
  );
};

export default CartFooter;
