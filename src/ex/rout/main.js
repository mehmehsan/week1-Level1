import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Profile from "./profile";
import About from "./about";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/about" component={About} />
    </Switch>
  </main>
);

export default Main;
