import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItems = () => {
  return (
    <Card sx={{ width: "100%", mt: 5, p: 2 }}>
      <Box sx={{ display: "flex" }}>
        <CardMedia component="img" height="100" image="" alt="" />
        <Typography component="p">Live From Space</Typography>

        <Button size="small" variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </Box>
      <Box></Box>
    </Card>
  );
};

export default CartItems;
