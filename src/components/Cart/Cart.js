import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "store/cart-context";

const Cart = ({ onClose }) => {
  const { items } = useContext(CartContext);

  const carItems = (
    <ul className={classes["cart-items"]}>
      {items.map(({ name, price }) => (
        <li>
          <div
            style={{
              width: "auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{name}</span> <span>{price}</span>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {carItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>
          {items.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}
        </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
