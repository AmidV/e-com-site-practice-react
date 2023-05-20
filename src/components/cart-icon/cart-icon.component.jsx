import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import ShoppingIcon from "../../assets/shopping-bag.svg";

import { CartIconContainer, ShopIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCartDropdownHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleCartDropdownHandler}>
      <ShopIcon src={ShoppingIcon} alt="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
