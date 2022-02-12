import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const carCtx = useContext(CartContext);
  console.log(carCtx);
  // const numbOfCartItems = 0;
 

  return (
    <button className={classes.button} onClick={props.onClickCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numbOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
