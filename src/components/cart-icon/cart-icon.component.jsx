import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import ShoppingIcon from "../../assets/shopping-bag.svg";

import { CartIconContainer, ShopIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleCartDropdownHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleCartDropdownHandler}>
      <ShopIcon src={ShoppingIcon} alt="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
