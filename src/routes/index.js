import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../pages/home";

const Routers = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>     
    </Router>
  );
};

export default Routers;
