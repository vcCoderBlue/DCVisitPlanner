import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import Transport1 from "./pageitems/Transport1";
import Transport2 from "./pageitems/Transport2";
import Footer from "../components/Footer";

function Font7() {
  return (
    <i class="fa fa-subway fa-3x"></i>
  )
}

function Font11() {
  return (
    <i class="fa fa-bicycle fa-3x"></i>
  )
}

class Transport extends Component {
  render() {
    return (
      <div>
      <Router>
        <div className="pages">
          <h2>Transport</h2>
          <div className="items">
            <ul>
              <li><Font11 /><Link to="/DCVisitPlanner/Transport/Transport1"> capital bikeshare</Link></li><br />
              <li><Font7 /><Link to="/DCVisitPlanner/Transport/Transport2"> Metro</Link></li><br />
            </ul>

              <Route path="/DCVisitPlanner/Transport/Transport1" component={Transport1}/>
              <Route path="/DCVisitPlanner/Transport/Transport2" component={Transport2}/>
          </div>
        </div>
      </Router>
          <br /><br /><br /><br />
          <Footer />
        </div>
    );
  }
}

export default Transport;
