import React from "react";
import Burger from "../../Burger/Burger";

function CheckoutSummary(props) {
  return (
    <div>
      <h1>Your checkout order:</h1>
      <Burger ingredient={props.ingredient} />
      <div className="Buttons">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => props.onContinueHandler()}
        >
          continue
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => props.onCancelHandler()}
        >
          back
        </button>
      </div>
    </div>
  );
}

export default CheckoutSummary;
