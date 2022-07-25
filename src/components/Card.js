import React from "react";

import "../styles/Card.css";

export default function Card(props) {
  const { id, link, title, subtitle, onCardClick } = props;

  const handleClick = (e) => {
    onCardClick(id);
  };

  return (
    <div className="Card" onClick={handleClick}>
      <img className="Card-image" src={link} alt={title} />
      <h3 className="Card-title">{title}</h3>
      <p className="Card-subtitle">{subtitle}</p>
    </div>
  );
}
