import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import {
  addItemToCart,
  removeItemFromCart,
  removeCartItemButton,
} from "../../store/cart/cart.action";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  // const {
  //   cartItems,
  //   addItemToCart,
  //   removeItemFromCart,
  //   removeCartItemButton,
  //   cartTotal,
  // } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>£ Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <CheckoutItem
          key={item.id}
          individualItem={item}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
          removeCartItemButton={removeCartItemButton}
        />
      ))}

      <span className="total">Total: £{cartTotal}</span>
    </div>
  );
};

export default Checkout;
