import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import Dining1 from "./pageitems/Dining1";
import Dining2 from "./pageitems/Dining2";
import Dining3 from "./pageitems/Dining3";
import Dining4 from "./pageitems/Dining4";
import Dining5 from "./pageitems/Dining5";
import Footer from "../components/Footer";

import Gmpd from "./maps/Gmpd";

function Font4() {
  return (
    <i class="fa fa-cutlery fa-3x"></i>
  )
}

class Dining extends Component {
  render() {
    return (
      <div>
      <Router>
        <div className="pages">
          <h2>Dining</h2>
          <div className="items">
            <ul>
              <li>1<Font4 /><Link to="/DCVisitPlanner/Dining/Dining1"> Beefsteak</Link></li><br />
              <li>2<Font4 /><Link to="/DCVisitPlanner/Dining/Dining2"> Chix</Link></li><br />
              <li>3<Font4 /><Link to="/DCVisitPlanner/Dining/Dining3"> District Taco</Link></li><br />
              <li>4<Font4 /><Link to="/DCVisitPlanner/Dining/Dining4"> The Hamilton</Link></li><br />
              <li>5<Font4 /><Link to="/DCVisitPlanner/Dining/Dining5"> Union Market</Link></li><br />
            </ul>

              <Route path="/DCVisitPlanner/Dining/Dining1" component={Dining1}/>
              <Route path="/DCVisitPlanner/Dining/Dining2" component={Dining2}/>
              <Route path="/DCVisitPlanner/Dining/Dining3" component={Dining3}/>
              <Route path="/DCVisitPlanner/Dining/Dining4" component={Dining4}/>
              <Route path="/DCVisitPlanner/Dining/Dining5" component={Dining5}/>
          </div>
        </div>
      </Router>
          <div className="map">
            <Gmpd /><br /><br /><br /><br/><br /><br /><br /><br/><br /><br /><br /><br/><br /><br /><br /><br/>
          </div>
          <Footer />
        </div>
    );
  }
}

export default Dining;
