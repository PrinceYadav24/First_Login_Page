import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./Screen/About";
import Contact from "./Screen/Contact";
import Error from "./Screen/eroor";
import Menu from "./Screen/Menu";

const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
      {/* <About />
      <Contact /> */}
    </>
  );
};

export default App;
