import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import Hotel1 from "./pageitems/Hotel1";
import Hotel2 from "./pageitems/Hotel2";
import Hotel3 from "./pageitems/Hotel3";
import Hotel4 from "./pageitems/Hotel4";
import Hotel5 from "./pageitems/Hotel5";
import Footer from "../components/Footer";
import Gmph from "./maps/Gmph";

function Font3() {
  return (
    <i class="fa fa-bed fa-3x"></i>
  )
}

class Hotels extends Component {
  render() {
    return (
      <div>
      <Router>
        <div className="pages">
          <h2>Hotels</h2>
          <div className="items">
            <ul>
              <li>1<Font3 /><Link to="/DCVisitPlanner/Hotels/Hotel1"> Hotel Lombardy</Link></li><br />
              <li>2<Font3 /><Link to="/DCVisitPlanner/Hotels/Hotel2"> Kimpton Hotel Rouge</Link></li><br />
              <li>3<Font3 /><Link to="/DCVisitPlanner/Hotels/Hotel3"> Mandarin Oriental</Link></li><br />
              <li>4<Font3 /><Link to="/DCVisitPlanner/Hotels/Hotel4"> The Watergate Hotel</Link></li><br />
              <li>5<Font3 /><Link to="/DCVisitPlanner/Hotels/Hotel5"> Washington Plaza Hotel</Link></li><br />
            </ul>

              <Route path="/DCVisitPlanner/Hotels/Hotel1" component={Hotel1}/>
              <Route path="/DCVisitPlanner/Hotels/Hotel2" component={Hotel2}/>
              <Route path="/DCVisitPlanner/Hotels/Hotel3" component={Hotel3}/>
              <Route path="/DCVisitPlanner/Hotels/Hotel4" component={Hotel4}/>
              <Route path="/DCVisitPlanner/Hotels/Hotel5" component={Hotel5}/>
          </div>
        </div>
      </Router>
          <div className="map">
            <Gmph /><br /><br /><br /><br/><br /><br /><br /><br/><br /><br /><br /><br/><br /><br /><br /><br/>
          </div>
          <Footer />
        </div>
    );
  }
}

export default Hotels;
