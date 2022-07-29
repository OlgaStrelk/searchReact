import React from "react";

import "../styles/Cards.css";

export default function Cards(props) {
  console.log(props);
  const { link, title, subtitle } = props;

  const truncate = (input) =>
    input.length > 140 ? `${input.substring(0, 140)}...` : input;

  return (
    <li className="Cards">
      <img className="Cards-image" src={link} alt={title} />
      <h3 className="Cards-title">{title}</h3>
      <p className="Cards-subtitle">{truncate(subtitle)}</p>
    </li>
  );
}
