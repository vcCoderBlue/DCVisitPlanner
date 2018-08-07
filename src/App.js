import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import CP from './capitol03.jpeg';
import 'font-awesome/css/font-awesome.min.css';
import Museums from "./pages/Museums";
import Dining from "./pages/Dining";
import Shopping from "./pages/Shopping";
import Hotels from "./pages/Hotels";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import Transport from "./pages/Transport";
import Weather from "./pages/Weather";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

function Capitol() {
  return (
    <div className="capitol">
      <img src={CP} alt="capitol" height="100%" width="100%"/>
    </div>
  )
}

function Content () {
  return (
  <div>
    <div className="wrapper">
      <Capitol />
      <div className="bottom-left"></div>
      <div className="top-left">
        DCVisitPlanner
      </div>
      <div className="top-right"></div>
      <div className="bottom-right"></div>
      <div className="centered"></div>
    </div>
  </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content />
        <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/DCVisitPlanner/" component={Home} exact />
            <Route path="/DCVisitPlanner/Museums" component={Museums} />
            <Route path="/DCVisitPlanner/Dining" component={Dining} />
            <Route path="/DCVisitPlanner/Shopping" component={Shopping} />
            <Route path="/DCVisitPlanner/Hotels" component={Hotels} />
            <Route path="/DCVisitPlanner/Favorites" component={Favorites} />
            <Route path="/DCVisitPlanner/Search" component={Search} />
            <Route path="/DCVisitPlanner/Transport" component={Transport} />
            <Route path="/DCVisitPlanner/Weather" component={Weather} />
            <Route path="/DCVisitPlanner/Todo" component={Todo} />
            <Route component={Error} />
          </Switch>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
