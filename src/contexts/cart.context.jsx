import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find existitng cart item
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // create new arrey with cart item and increased quantity
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // if not found an existing cart item then return new item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeButton = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},

  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeCartItemButton: () => {},
  cartCount: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  //   this useEffect gives a  total number of items in the shopping cart
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  //   to count a cart total price
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const removeCartItemButton = (productToRemove) => {
    setCartItems(removeButton(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    removeCartItemButton,
    cartItems,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
