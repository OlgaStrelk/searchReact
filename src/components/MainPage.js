import React, { useState, useMemo, useContext } from "react";
import { Link } from "react-router-dom";

import { LoadingContext } from "../context/LoadingContext";
import Input from "./Input";
import Form from "./Form";
import Button from "./Button";
import Card from "./Card";
import Pagination from "./Pagination";
import Loading from "./Loading";
import NotFound from "./NotFound";
import "../styles/MainPage.scss";
import api from "../api/api";

function MainPage() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [inputValue, setInputValue] = useState("");
  const [cardsData, setCardsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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

  //отправить запрос за карточками
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
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

  console.log(cardsData);
  console.log(currentTableData);

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
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <ul>
              {currentTableData.map((card) => (
                <Link to={`/${card.id}`}>
                  <Card {...card} />
                </Link>
              ))}
            </ul>
            <Pagination
              className="pagination"
              currentPage={currentPage}
              totalCount={cardsData.length}
              pageSize={pageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </>
        )}
        {isNotFound && <NotFound />}
      </section>
    </>
  );
}

export default MainPage;
