import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage.component";
import Survey from "./pages/Survey.component";
import Review from "./pages/Review.component";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/survey">
          <Survey />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
