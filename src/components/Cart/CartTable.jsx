import {
  Box,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useGetAllProductsQuery } from "../../store/productsApi";
import { styles } from "./CartGlobalStyle";

const CartTable = () => {
  const { error, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <Box component="div" sx={{mt:5}}>
     <Grid container sx={styles.row}>
        <Grid xs={{lg:'6', sm: '2'}}>
          <Typography sx={styles.headFirstCell}>Product</Typography>
        </Grid>
        <Grid xs={2}>
          <Typography sx={styles.headCell}>Price</Typography>
        </Grid>
        <Grid xs={2}>
          <Typography sx={styles.headCell}>Quantity</Typography>
        </Grid>
        <Grid xs={2}>
          <Typography sx={styles.headCell}>Total</Typography>
        </Grid>
      </Grid>
      <Divider sx={{mt:2, color: '#'}}/>
      <Divider orientation="vertical"  />
    </Box>
  );
};

export default CartTable;
