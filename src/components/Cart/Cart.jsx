// import { useCart } from "../../hooks/useCart";
import { Table, TableContainer } from "@mui/material";
import CartItems from "./CartItems";
import CartTable from "./CartTable";

const Cart = () => {
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <CartTable />
        </Table>
      </TableContainer>
      <CartItems/>
    </>
  );
};

export default Cart;
