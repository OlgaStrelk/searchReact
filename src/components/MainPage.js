import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";

import Input from "./Input";
import Form from "./Form";
import Button from "./Button";
import Cards from "./Cards";
import Pagination from "./Pagination";
import Loading from "./Loading";
import NotFound from "./NotFound";
import "../styles/MainPage.scss";
import api from "../api/api";

function MainPage({ setCardData }) {
  const [inputValue, setInputValue] = useState("");
  const [cardsData, setCardsData] = useState([]);
  const [selectedCardId, handleCardClick] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isCardClicked, setCardClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  let pageSize = 9;

  //отрисовать кнопку поиска
  const renderButton = () => {
    if (inputValue === "") {
      setIsButtonActive(false);
    }
    setIsButtonActive(true);
  };

  //открыть попап, если карточка кликнута
  useEffect(() => {
    if (isCardClicked === true) {
      setIsLoading(true);
      api
        .getCardById(selectedCardId)
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
    }
  }, [isCardClicked]);

  //отправить запрос за карточками
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setIsNotFound(false);
    setIsLoading(true);
    setCardsData([]);
    api
      .getCards(inputValue)
      .then((res) => {
        if (res.length === 0) {
          setIsNotFound(true);
        } else {
          setIsNotFound(false);
          const formattedData = res.map((cardData) => {
            return {
              link: cardData.image_url,
              title: cardData.name,
              subtitle: cardData.description,
              id: cardData.id,
            };
          });
          setCardsData(formattedData);
        }
      })
      .finally(() => setIsLoading(false));
  };

  //карточки для отображения на одной странице
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return cardsData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, cardsData, pageSize]);

  //управляемый импут
  const handleInput = (e) => {
    setInputValue(e.target.value);
    renderButton();
  };

  return (
    <>
      <section className="searcher">
        <Form handleSubmit={handleSubmit}>
          <Input handleChange={handleInput} value={inputValue} />
          <Button
            text={"Искать"}
            inputValue={inputValue}
            isButtonActive={isButtonActive}
          />
        </Form>
      </section>

      <section className="results">
        {isLoading && <Loading>Loading...</Loading>}
        <div className="cards">
          {isNotFound && <NotFound />}
          {currentTableData.map((card) => (
            <Link to="">
              <Cards
                {...card}
                key={card.id}
                getCardId={handleCardClick}
                onCardClick={setCardClicked}
              />
            </Link>
          ))}
          <Pagination
            className="pagination"
            currentPage={currentPage}
            totalCount={cardsData.length}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />{" "}
        </div>
      </section>
    </>
  );
}

export default MainPage;
