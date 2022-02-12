import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  console.log(state);
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};



  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
