import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Home from "../components/Home/home";
import Clock from "../components/Clock/Clock";
import Contact from "../components/Contact/contact";
class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/clock">Clock</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact Me</NavLink>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
