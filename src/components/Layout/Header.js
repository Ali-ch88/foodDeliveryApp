import React, { Fragment } from "react";
import mealImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FoodMeals</h1>
        <HeaderCartButton onClickCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="A table of food" />
      </div>
    </Fragment>
  );
};

export default Header;
