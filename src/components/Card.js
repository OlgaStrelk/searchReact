import React from "react";

import "../styles/Card.scss";

export default function Cards(props) {
  console.log(props);
  const { link, title, subtitle } = props;

  const truncate = (input) =>
    input.length > 140 ? `${input.substring(0, 140)}...` : input;

  return (
    <li className="card">
      <div className="image-container">
        <img className="image" src={link} alt={title} />
      </div>
      <h3 className="title">{title}</h3>
      <p className="subtitle">{truncate(subtitle)}</p>
    </li>
  );
}
