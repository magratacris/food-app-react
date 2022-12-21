import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 69420,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
