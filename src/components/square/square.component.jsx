import React from "react";

import "./square.styles.scss";

const Square = props => (
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
);

export default Square;
