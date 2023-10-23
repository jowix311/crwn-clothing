import "./checkout-cart.styles";
import CheckoutItem from "../checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout-cart.styles";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

const CheckoutCart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
