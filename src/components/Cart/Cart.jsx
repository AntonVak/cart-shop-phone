// import { useCart } from "../../hooks/useCart";
import { Table, TableContainer } from "@mui/material";
import CartTable from "./CartTable";

const Cart = () => {
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <CartTable />
        </Table>
      </TableContainer>
    </>
  );
};

export default Cart;
