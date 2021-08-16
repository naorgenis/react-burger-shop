import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <div className="input">
      <input className="inputTag" type={props.type} placeholder={props.text} />
    </div>
  );
}

export default Input;
