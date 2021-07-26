import React from "react";
import "./Control.css";

function Control(props) {
  return (
    <div className="Control">
      <div className="Label">{props.label}</div>
      <button
        type="button"
        className="btn btn-warning less"
        onClick={() => props.ingRemove(props.type)}
      >
        Less
      </button>
      <button
        type="button"
        className="btn btn-warning more"
        onClick={() => props.ingAdded(props.type)}
      >
        More
      </button>
    </div>
  );
}

export default Control;
