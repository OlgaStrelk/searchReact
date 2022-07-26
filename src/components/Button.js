import React from "react";
import classnames from "classnames";


import "../styles/Button.css";

export default function Button({ text, inputValue }) {
  return <button className={classnames("Button", {
    disabled: inputValue === '',})
  }>{text}</button>;
}
