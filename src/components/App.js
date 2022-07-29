import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoadingContext } from "../contexts/LoadingContext";
import { CardsContext } from "../contexts/CardsContext";

import MainPage from "./MainPage";
import CardPage from "./CardPage";

function App() {
  const [cardsData, setCardsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <Switch>
        <CardsContext.Provider value={{ cardsData, setCardsData }}>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/:id">
            <CardPage />
          </Route>{" "}
        </CardsContext.Provider>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </LoadingContext.Provider>
  );
}

export default App;
