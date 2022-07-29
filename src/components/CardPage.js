import React from "react";

import "../styles/CardPage.scss";

function CardPage(props) {
  const { openCard, cardData, onClose } = props;
  return (
    <div className={`Card ${openCard && "Card-open"}`}>
      <div className="Card-container">
        <button
          type="button"
          className="Card-close"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>

        <img
          className="Card-image"
          src={cardData?.link}
          alt={cardData?.title}
        />

        <h3 className="Card-title">{cardData?.title}</h3>
        <p className="Card-subtitle">{cardData?.subtitle}</p>
        <span className="Card-tagline">{cardData?.tagline}</span>
        <p className="Card-text">{cardData?.abv}</p>
        <p className="Card-text">{cardData?.food}</p>
      </div>
    </div>
  );
}

export default CardPage;
