import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import "../styles/CardPage.scss";
import api from "../api/api";
import NotFound from "./NotFound";
import Loading from "./Loading";
import { LoadingContext } from "../context/LoadingContext";

function CardPage() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const [cardData, setCardData] = useState(null);

  const { id } = useParams();
  const history = useHistory();

  //загрузить информацию
  useEffect(() => {
    setIsLoading(true);
    api
      .getCardById(id)
      .then((res) => {
        setCardData({
          link: res[0].image_url,
          title: res[0].name,
          subtitle: res[0].description,
          tagline: res[0].tagline,
          abv: res[0].abv,
          food: res[0].food_pairing,
        });
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Вернуться назад
      </button>
      {isLoading ? (
        <Loading />
      ) : cardData ? (
        <div className="Card-container">
          <img
            className="Card-image"
            src={cardData.link}
            alt={cardData.title}
          />

          <h3 className="Card-title">{cardData.title}</h3>
          <p className="Card-subtitle">{cardData.subtitle}</p>
          <span className="Card-tagline">{cardData.tagline}</span>
          <p className="Card-text">{cardData.abv}</p>
          <p className="Card-text">{cardData.food}</p>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default CardPage;
