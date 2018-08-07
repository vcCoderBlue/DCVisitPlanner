import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import Shopping1 from "./pageitems/Shopping1";
import Shopping2 from "./pageitems/Shopping2";
import Shopping3 from "./pageitems/Shopping3";
import Shopping4 from "./pageitems/Shopping4";
import Shopping5 from "./pageitems/Shopping5";
import Footer from "../components/Footer";
import Gmps from "./maps/Gmps";

function Font5() {
  return (
    <i class="fa fa-shopping-bag fa-3x"></i>
  )
}

class Shopping extends Component {
  render() {
    return (
      <div>
      <Router>
        <div className="pages">
          <h2>Shopping</h2>
          <div className="items">
            <ul>
              <li>1<Font5 /><Link to="/DCVisitPlanner/Shopping/Shopping1"> CityCenterDC</Link></li><br />
              <li>2<Font5 /><Link to="/DCVisitPlanner/Shopping/Shopping2"> Fashion Centre at Penatagon City</Link></li><br />
              <li>3<Font5 /><Link to="/DCVisitPlanner/Shopping/Shopping3"> Georgetown</Link></li><br />
              <li>4<Font5 /><Link to="/DCVisitPlanner/Shopping/Shopping4"> Mazza Gallerie</Link></li><br />
              <li>5<Font5 /><Link to="/DCVisitPlanner/Shopping/Shopping5"> Tysons Corner Center</Link></li><br />
            </ul>

              <Route path="/DCVisitPlanner/Shopping/Shopping1" component={Shopping1}/>
              <Route path="/DCVisitPlanner/Shopping/Shopping2" component={Shopping2}/>
              <Route path="/DCVisitPlanner/Shopping/Shopping3" component={Shopping3}/>
              <Route path="/DCVisitPlanner/Shopping/Shopping4" component={Shopping4}/>
              <Route path="/DCVisitPlanner/Shopping/Shopping5" component={Shopping5}/>
            </div>
          </div>
      </Router>
          <div className="map">
            <Gmps /><br /><br /><br /><br/><br /><br /><br /><br/><br /><br /><br /><br/><br /><br /><br /><br/>
          </div>
          <Footer />
        </div>
    );
  }
}

export default Shopping;
