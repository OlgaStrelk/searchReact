import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/App.scss";

import api from "../api/api";

import MainPage from "./MainPage";

import CardPage from "./CardPage";

function App() {
  const [cardData, setCardData] = useState(null);

  return (
    <div className="app">
      <div className="container">
        <MainPage setCardData={setCardData}/>

        <CardPage cardData={cardData}></CardPage>
      </div>
    </div>
  );
}

export default App;
