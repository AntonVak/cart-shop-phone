import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartQuantity,
  selectCartTotalPrice,
} from "../store/cart/selectors";

export const useCart = () => {
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const totalQuantity = useSelector(selectCartQuantity);

  return { items, totalPrice, totalQuantity };
};
