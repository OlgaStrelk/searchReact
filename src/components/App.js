import React, { useState } from "react";
import "../styles/App.css";

import api from "../api/api";

import Input from "./Input";
import Form from "./Form";
import Button from "./Button";
import Card from "./Card";
import Popup from "./Popup";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [cardsData, setCardsData] = useState([]);
  const [selectedCard, handleCardClick] = useState(null);

  const closePopup = () => {
    handleCardClick(null);
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
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="App">
      <div className="App-content">
        <Form className="App-search" handleSubmit={handleSubmit}>
          <Input handleChange={handleInput} value={inputValue} />
          <Button text={"Search"} />
        </Form>
        <section className="App-cards">
          {cardsData.map((card) => (
            <Card {...card} key={card.id} onCardClick={handleCardClick} />
          ))}
        </section>
        <Popup selectedCard={selectedCard} onClose={closePopup} />
      </div>
    </div>
  );
}

export default App;
