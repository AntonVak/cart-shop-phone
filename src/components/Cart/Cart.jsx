import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCart } from "../../hooks/useCart";
import { setTotalPrice } from "../../store/cart/cartSlice";
import CartFooter from "./CartFooter";

import CartItems from "./CartItems";
import CartTable from "./CartTable";

const Cart = () => {
  const { items } = useCart();
  const dispatchFunc = useDispatch();

  useEffect(() => {
    if(items.length > 0) {
      const currentTotalPrice = items.reduce((acc, curr) => {
        return acc + curr.price * curr.cartQuantity
      },0)
      dispatchFunc(setTotalPrice(currentTotalPrice));
    }
    if (items.length === 0) {
      dispatchFunc(setTotalPrice(0));
    }
  }, [dispatchFunc, items]);
 


  
  return (
    <>
      {items.length === 0 ? (
        <p>Yors Cart Empty</p>
      ) : (
        <>
          <CartTable />
          {items.map((item) => (
            <div key={item.id}>
              <CartItems item={item} />
            </div>
          ))}
          <CartFooter items={items} />
        </>
      )}
    </>
  );
};

export default Cart;
