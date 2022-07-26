import React from "react";

import "../styles/Card.css";

export default function Card(props) {
  const { id, link, title, subtitle, getCardId, fillPopup } = props;

  const handleClick = (e) => {
    getCardId(id);
    fillPopup(id);
  };

  const truncate = (input) => input.length > 140 ? `${input.substring(0, 140)}...` : input;


  return (
    <div className="Card" onClick={handleClick}>
      <img className="Card-image" src={link} alt={title} />
      <h3 className="Card-title">{title}</h3>
      <p className="Card-subtitle">{truncate(subtitle)}</p>
    </div>
  );
}
