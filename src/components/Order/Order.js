import React from "react";
import "./Order.css";

function Order(props) {
  //console.log(props.orderData);
  let transformIngredient = Object.keys(props.orderData.ingredient).map(
    (ingKey) => {
      if (props.orderData.ingredient[ingKey] !== 0) {
        return (
          <span key={ingKey}>
            {ingKey}: {props.orderData.ingredient[ingKey]}{" "}
          </span>
        );
      }
    }
  );

  return (
    <div
      className="Order"
      onDoubleClick={() => props.onDeleteOrder(props.orderData.id)}
    >
      <p>
        ingredient: <span>{transformIngredient}</span>
      </p>

      <p>
        Price: <strong>{props.orderData.totalPrice.toFixed(2)}$</strong>
      </p>
    </div>
  );
}

export default Order;
