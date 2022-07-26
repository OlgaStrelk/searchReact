import React, { useState, useMemo } from "react";
import "../styles/App.css";

import api from "../api/api";

import Input from "./Input";
import Form from "./Form";
import Button from "./Button";
import Card from "./Card";
import Popup from "./Popup";
import Pagination from "./Pagination";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [cardsData, setCardsData] = useState([]);
  const [selectedCardId, handleCardClick] = useState(null);
  const [popupData, setPopupData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  let PageSize = 9;
  
  const fillPopup = () => {
    api.getCardById(selectedCardId).then((res) => {
      setPopupData({
        link: res[0].image_url,
        title: res[0].name,
        subtitle: res[0].description,
        tagline: res[0].tagline,
        abv: res[0].abv,
        food: res[0].food_pairing,
      });
    });
  };

  const closePopup = () => {
    setPopupData(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.getCards().then((res) => {
      const formattedData = res.map((cardData) => {
        return {
          link: cardData.image_url,
          title: cardData.name,
          subtitle: cardData.description,
          id: cardData.id,
        };
      });
      setCardsData(formattedData);
    });
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cardsData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <div className="App-content">
        <Form className="App-search" handleSubmit={handleSubmit}>
          <Input handleChange={handleInput} value={inputValue} />
          <Button text={"Искать"} />
        </Form>
        <section className="App-cards">
          {currentTableData.map((card) => (
            <Card
              {...card}
              key={card.id}
              getCardId={handleCardClick}
              fillPopup={fillPopup}
            />
          ))}
        </section>
        <Pagination
          className="App-pagination"
          currentPage={currentPage}
          totalCount={cardsData.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
        <Popup popupData={popupData} onClose={closePopup} />
      </div>
    </div>
  );
}

export default App;
