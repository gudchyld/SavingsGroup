import React from "react";

export default function Table(props) {
  return (
    <div className="Table">
      <div className="T-1">{props.name}</div>
      <div className="T-2">{props.amount}</div>
    </div>
  );
}
