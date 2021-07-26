import React from "react";
import "./Order.css";

function Order(props) {
  console.log(props.orderData);
  return (
    <div className="Order">
      <p>
        ingredient: <text>salad: 1 </text>
      </p>

      <p>
        Price: <strong>7.90$</strong>{" "}
      </p>
    </div>
  );
}

export default Order;
