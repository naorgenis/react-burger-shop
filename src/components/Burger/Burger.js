import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

function Burger(props) {
  let transformIngredient = Object.keys(props.ingredient)
    .map((ingKey) => {
      return [...Array(props.ingredient[ingKey])].map((_, i) => (
        <BurgerIngredient key={ingKey + i} type={ingKey} />
      ));
    })
    .flat(Infinity);
  if (transformIngredient.length === 0)
    transformIngredient = <p>Please start adding ingredient!</p>;
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default Burger;
