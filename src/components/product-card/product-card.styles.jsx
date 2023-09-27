import "./product-card.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../context/cart-context";
import { useContext } from "react";
const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCard = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCard}>
        Add to Card
      </Button>
    </div>
  );
};

export default ProductCard;
