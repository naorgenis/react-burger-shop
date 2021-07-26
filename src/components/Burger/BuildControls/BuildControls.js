import React from "react";
import Control from "./Control/Control";
import "./BuildControls.css";

function BuildControls(props) {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
  ];

  return (
    <div className="BuildControls">
      <p>
        Total Price: <strong>{props.totalPrice}$</strong>
      </p>

      {controls.map((con) => {
        return (
          <Control
            label={con.label}
            key={con.label}
            type={con.type}
            ingAdded={props.ingAdded}
            ingRemove={props.ingRemove}
          />
        );
      })}
      <button
        type="button"
        className="btn btn-success"
        disabled={!props.purchasable}
        onClick={() => props.modal()}
      >
        Order Now!
      </button>
    </div>
  );
}

export default BuildControls;
