import React from "react";
import classnames from "classnames";

import "../styles/Button.scss";

export default function Button({ text, inputValue, isButtonActive }) {
  return (
    <button
      className={classnames("button", {
        disabled: inputValue === "",
      })}
      disabled={!(isButtonActive)}
    >
      {text}
    </button>
  );
}
