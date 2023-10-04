import { CartContext } from "../../context/cart-context";
import { useContext } from "react";
import "./checkout-cart.styles";
import CheckoutItem from "../checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout-cart.styles";

const CheckoutCart = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      {cartItems.length === 0 ? (
        <h2>No items on Cart!</h2>
      ) : (
        <>
          <CheckoutHeader>
            <HeaderBlock>
              <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Remove</span>
            </HeaderBlock>
          </CheckoutHeader>
          {cartItems.map((item) => {
            return <CheckoutItem key={item.id} cartItem={item} />;
          })}
          <Total>total: ${cartTotal}</Total>
        </>
      )}
    </CheckoutContainer>
  );
};

export default CheckoutCart;
