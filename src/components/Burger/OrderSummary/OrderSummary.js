import React from "react";
import "./OrderSummary.css";

function OrderSummary(props) {
  let transformIngredient = Object.keys(props.ingredient).map((ingKey) => {
    if (props.ingredient[ingKey] !== 0) {
      return (
        <li key={ingKey}>
          {ingKey} ..... {props.ingredient[ingKey]}
        </li>
      );
    }
  });

  console.log(transformIngredient);

  return (
    <div className="OrderSummary">
      <h3>Your Order:</h3>
      <ul>{transformIngredient}</ul>
      <p>Total Price: {props.totalPrice.toFixed(2)} $</p>
      <p> Proceed to checkout?</p>
      <div className="Buttons">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => props.order()}
        >
          Order!
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => props.modal()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
