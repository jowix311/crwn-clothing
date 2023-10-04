import "./product-card.styles";
import Button from "../button/button.component";
import { CartContext } from "../../context/cart-context";
import { useContext } from "react";
import { Footer, Image, ProductCardContainer } from "./product-card.styles";
const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCard = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCard}>
        Add to Card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
