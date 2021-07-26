import React from "react";
import Modal from "../modal/Modal";
import "./Backdrop.css";

function Backdrop(props) {
  return <div className="Backdrop" onClick={() => props.modal()}></div>;
}

export default Backdrop;
