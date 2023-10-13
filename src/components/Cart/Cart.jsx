import { useCart } from "../../hooks/useCart";
import CartFooter from "./CartFooter";

import CartItems from "./CartItems";
import CartTable from "./CartTable";

const Cart = () => {
  const { items } = useCart();
  console.log(items);
  return (
    <>
      {items.length === 0 ? <p>Yors Cart Empty</p> : <CartTable />}
      {items.map((item) => (
        <div key={item.id}>
          <CartItems item={item} />
        </div>
      ))}
      <CartFooter items/>
    </>
  );
};

export default Cart;
