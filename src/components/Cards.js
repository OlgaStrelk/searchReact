import React from "react";

import "../styles/Cards.css";

export default function Cards(props) {
  const { id, link, title, subtitle, getCardId, onCardClick } = props;

  const handleClick = (e) => {
    getCardId(id);
    onCardClick(true);
  };

  const truncate = (input) =>
    input.length > 140 ? `${input.substring(0, 140)}...` : input;

  return (
    <div className="Cards" onClick={handleClick}>
      <img className="Cards-image" src={link} alt={title} />
      <h3 className="Cards-title">{title}</h3>
      <p className="Cards-subtitle">{truncate(subtitle)}</p>
    </div>
  );
}
