import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";

import { CartContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/checkout`);
  };
  console.log(cartItems);
  return (
    <CartContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>The Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={navigateHandler}>CHECKOUT</Button>
    </CartContainer>
  );
};

export default CartDropdown;
