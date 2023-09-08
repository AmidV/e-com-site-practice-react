import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (boolean) => {
  return {
    type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
    payload: boolean,
  };
};

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

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};

export const removeCartItemButton = (cartItems, productToRemove) => {
  const newCartItems = removeButton(cartItems, productToRemove);
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};
