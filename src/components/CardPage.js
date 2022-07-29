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
    <div className="card-page">
      <button
        className="return-btn"
        onClick={() => {
          history.goBack();
        }}
      >
        &#8592;Вернуться назад
      </button>
      {isLoading ? (
        <Loading />
      ) : cardData ? (
        <section className="content">
          <div className="image">
            <img
              className="image item"
              src={cardData.link}
              alt={cardData.title}
            />
          </div>
          <div className="description">
            <h3>{cardData.title}</h3>
            <p>{cardData.subtitle}</p>
            <span>{cardData.tagline}</span>
            <p>{cardData.abv} vol.</p>
            <p>{cardData.food}</p>
          </div>
        </section>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default CardPage;
