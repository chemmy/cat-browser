import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import Cat from "./components/pages/Cat";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Cat} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
