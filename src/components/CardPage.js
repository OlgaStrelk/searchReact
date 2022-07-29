import React from "react";

import "../styles/CardPage.scss";

function CardPage(props) {
  const { cardData } = props;
  return (
    <>
      <a href="#">Вернуться назад</a>
      <div className="Card-container">
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
    </>
  );
}

export default CardPage;
