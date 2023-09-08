import { useSelector, useDispatch } from "react-redux";

import {
  CheckOutContainer,
  ImageContainer,
  Image,
  Name,
  Quantity,
  Price,
  Value,
  Arrow,
  RemoveButton,
} from "./checkout-item.styles";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({
  individualItem,
  addItemToCart,
  removeItemFromCart,
  removeCartItemButton,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, price, quantity } = individualItem;

  const addItemHandler = () =>
    dispatch(addItemToCart(cartItems, individualItem));

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, individualItem));

  const removeButtonHandler = () =>
    dispatch(removeCartItemButton(cartItems, individualItem));

  return (
    <CheckOutContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={removeButtonHandler}>&#10005;</RemoveButton>
    </CheckOutContainer>
  );
};

export default CheckoutItem;
