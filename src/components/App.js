import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoadingContext } from "../context/LoadingContext";

import MainPage from "./MainPage";
import CardPage from "./CardPage";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
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
    </LoadingContext.Provider>
  );
}

export default App;
