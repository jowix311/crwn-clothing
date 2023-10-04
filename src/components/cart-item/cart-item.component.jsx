import "./cart-item.styles";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";

const CartItem = ({ carItem }) => {
  const { name, imageUrl, price, quantity } = carItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
