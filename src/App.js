import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CatState from "./context/cat/CatState";
import Home from "./components/pages/Home";
import Cat from "./components/pages/Cat";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <CatState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={Cat} />
          </Switch>
        </BrowserRouter>
      </CatState>
    </div>
  );
}

export default App;
