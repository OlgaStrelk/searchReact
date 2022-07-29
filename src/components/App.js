import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../styles/App.scss";

import MainPage from "./MainPage";
import CardPage from "./CardPage";

function App() {

  return (
    <div className="app">
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <MainPage/>
          </Route>
          <Route path="/:id">
            <CardPage  />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
