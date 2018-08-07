import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import Museum1 from "./pageitems/Museum1";
import Museum2 from "./pageitems/Museum2";
import Museum3 from "./pageitems/Museum3";
import Museum4 from "./pageitems/Museum4";
import Museum5 from "./pageitems/Museum5";
import Footer from "../components/Footer";
import Gmpm from "./maps/Gmpm";

function Font6() {
  return (
    <i class="fa fa-university fa-3x"></i>
  )
}

class Museums extends Component {
  render() {
    return (
      <div>
      <Router>
        <div className="pages">
          <h2>Museums/Monuments</h2>
          <div className="items">
            <ul>
              <li>1<Font6 /><Link to="/DCVisitPlanner/Museums/Museum1"> Arlington National Cemetary</Link></li><br/>
              <li>2<Font6 /><Link to="/DCVisitPlanner/Museums/Museum2"> International Spy Museum</Link></li><br />
              <li>3<Font6 /><Link to="/DCVisitPlanner/Museums/Museum3"> National Museum of African American History and Culture</Link></li><br />
              <li>4<Font6 /><Link to="/DCVisitPlanner/Museums/Museum4"> National World War II Memorial</Link></li><br />
              <li>5<Font6 /><Link to="/DCVisitPlanner/Museums/Museum5"> United States Holocaust Memorial Museum</Link></li><br />
            </ul>

              <Route path="/DCVisitPlanner/Museums/Museum1" component={Museum1}/>
              <Route path="/DCVisitPlanner/Museums/Museum2" component={Museum2}/>
              <Route path="/DCVisitPlanner/Museums/Museum3" component={Museum3}/>
              <Route path="/DCVisitPlanner/Museums/Museum4" component={Museum4}/>
              <Route path="/DCVisitPlanner/Museums/Museum5" component={Museum5}/>
            </div>
          </div>
      </Router>
          <div className="map">
            <Gmpm /><br /><br /><br /><br/><br /><br /><br /><br/><br /><br /><br /><br/><br /><br /><br /><br/>
          </div>
          <Footer />
        </div>
    );
  }
}

export default Museums;
