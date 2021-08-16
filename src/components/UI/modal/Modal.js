import React from "react";
import Backdrop from "../backdrop/Backdrop";
import "./Modal.css";

function Modal(props) {
  return (
    <>
      <Backdrop modal={props.modal} />
      <div className="Modal">{props.children}</div>
    </>
  );
}

export default Modal;
