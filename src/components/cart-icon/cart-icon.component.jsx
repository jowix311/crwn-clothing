import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles";
import { CartContext } from "../../context/cart-context";
import { useContext } from "react";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIconContainer,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartItemsCount } = useContext(CartContext);
  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer>
      <ShoppingIconContainer onClick={toggleCartDropdown} />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
