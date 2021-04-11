import React, { Component } from "react";
import "./App.css";
import Login from "./page/Login/Login";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import HomePage from "./page/HomePage/HomePage";
import Register from "./page/Register/Register";

import { BrowserRouter, Route, Switch } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/logout" component={Login} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
