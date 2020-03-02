import React, { useContext } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import main from "../styles/main";

import StaticHeader from "./static/Header";
import StaticFooter from "./static/Footer";
import HomeBody from "./home/Body";
import AboutBody from "./about/Body";

export const Routes = () => {
  return (
    <div>
      <Router>
        <StaticHeader />
        <Switch>
          <Route exact path="/" component={HomeBody} />
          <Route path="/about" component={AboutBody} />
        </Switch>
        <StaticFooter />
      </Router>
    </div>
  );
};
