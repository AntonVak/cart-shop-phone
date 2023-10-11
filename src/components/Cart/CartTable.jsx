import { TableCell, TableHead, TableRow } from "@mui/material";
import { useGetAllProductsQuery } from "../../store/productsApi";
import { styles } from "./CartGlobalStyle";

const CartTable = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }
  console.log("data :>> ", data);

  return (
    <TableHead>
      <TableRow sx={styles.row}>
        <TableCell sx={styles.headFirstCell}>Product</TableCell>
        <TableCell sx={styles.headCell}>Price</TableCell>
        <TableCell sx={styles.headCell}>Quantity</TableCell>
        <TableCell sx={styles.headCell}>Total</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default CartTable;
