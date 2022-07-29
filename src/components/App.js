import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../styles/App.scss";
import { LoadingContext } from "../context/LoadingContext";

import MainPage from "./MainPage";
import CardPage from "./CardPage";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <div className="app">
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/:id">
              <CardPage />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </div>
    </LoadingContext.Provider>
  );
}

export default App;
