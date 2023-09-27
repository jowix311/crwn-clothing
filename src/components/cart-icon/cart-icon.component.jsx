import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.component.scss";
import { CartContext } from "../../context/cart-context";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartItemsCount } = useContext(CartContext);
  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartDropdown} />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
