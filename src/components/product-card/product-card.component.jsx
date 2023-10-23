import "./product-card.styles";
import Button from "../button/button.component";
import { Footer, Image, ProductCardContainer } from "./product-card.styles";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
const ProductCard = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const { name, price, imageUrl } = product;

  const addProductToCard = () => dispatch(addItemToCart(cartItems, product));
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
