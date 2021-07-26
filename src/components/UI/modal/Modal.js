import React from "react";
import OrderSummary from "../../Burger/OrderSummary/OrderSummary";
import Backdrop from "../backdrop/Backdrop";
import "./Modal.css";

function Modal(props) {
  return (
    <>
      <Backdrop modal={props.modal} />
      <div className="Modal">
        {props.children}
        {/* <OrderSummary
          ingredient={props.ingredient}
          totalPrice={props.totalPrice}
          modal={props.modal}
          order={props.order}
        /> */}
        <div></div>
      </div>
    </>
  );
}

export default Modal;
