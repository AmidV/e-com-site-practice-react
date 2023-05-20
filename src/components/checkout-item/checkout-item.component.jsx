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

const CheckoutItem = ({
  individualItem,
  addItemToCart,
  removeItemFromCart,
  removeCartItemButton,
}) => {
  const { name, imageUrl, price, quantity } = individualItem;

  const addItemHandler = () => addItemToCart(individualItem);

  const removeItemHandler = () => removeItemFromCart(individualItem);

  const removeButtonHandler = () => removeCartItemButton(individualItem);

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
