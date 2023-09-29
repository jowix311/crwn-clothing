import { CartContext } from "../../context/cart-context";
import { useContext } from "react";
import "./checkout-cart.styles.scss";
import CheckoutItem from "../checkout-item/checkout-item.component";

const CheckoutCart = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      {cartItems.length === 0 ? (
        <h2>No items on Cart!</h2>
      ) : (
        <>
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Description</span>
            </div>
            <div className="header-block">
              <span>Quantity</span>
            </div>
            <div className="header-block">
              <span>Price</span>
            </div>
            <div className="header-block">
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((item) => {
            return <CheckoutItem key={item.id} cartItem={item} />;
          })}
          <div className="total">total: ${cartTotal}</div>
        </>
      )}
    </div>
  );
};

export default CheckoutCart;
