import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Museum1 from "./pageitems/Museum1";
import Museum2 from "./pageitems/Museum2";
import Museum3 from "./pageitems/Museum3";
import Museum4 from "./pageitems/Museum4";
import Museum5 from "./pageitems/Museum5";
import Hotel1 from "./pageitems/Hotel1";
import Hotel2 from "./pageitems/Hotel2";
import Hotel3 from "./pageitems/Hotel3";
import Hotel4 from "./pageitems/Hotel4";
import Hotel5 from "./pageitems/Hotel5";
import Dining1 from "./pageitems/Dining1";
import Dining2 from "./pageitems/Dining2";
import Dining3 from "./pageitems/Dining3";
import Dining4 from "./pageitems/Dining4";
import Dining5 from "./pageitems/Dining5";
import Shopping1 from "./pageitems/Shopping1";
import Shopping2 from "./pageitems/Shopping2";
import Shopping3 from "./pageitems/Shopping3";
import Shopping4 from "./pageitems/Shopping4";
import Shopping5 from "./pageitems/Shopping5";
import Transport1 from "./pageitems/Transport1";
import Transport2 from "./pageitems/Transport2";
import { connect } from 'react-redux';
import { Favs } from './Favs';
import Footer from "../components/Footer";

class Favorites extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Favorites:</h2>
            <div className="items">
                {this.props.link.favorites}

          <Route path="/DCVisitPlanner/Museums/Museum1" component={Museum1}/>
          <Route path="/DCVisitPlanner/Museums/Museum2" component={Museum2}/>
          <Route path="/DCVisitPlanner/Museums/Museum3" component={Museum3}/>
          <Route path="/DCVisitPlanner/Museums/Museum4" component={Museum4}/>
          <Route path="/DCVisitPlanner/Museums/Museum5" component={Museum5}/>

          <Route path="/DCVisitPlanner/Hotels/Hotel1" component={Hotel1}/>
          <Route path="/DCVisitPlanner/Hotels/Hotel2" component={Hotel2}/>
          <Route path="/DCVisitPlanner/Hotels/Hotel3" component={Hotel3}/>
          <Route path="/DCVisitPlanner/Hotels/Hotel4" component={Hotel4}/>
          <Route path="/DCVisitPlanner/Hotels/Hotel5" component={Hotel5}/>

          <Route path="/DCVisitPlanner/Dining/Dining1" component={Dining1}/>
          <Route path="/DCVisitPlanner/Dining/Dining2" component={Dining2}/>
          <Route path="/DCVisitPlanner/Dining/Dining3" component={Dining3}/>
          <Route path="/DCVisitPlanner/Dining/Dining4" component={Dining4}/>
          <Route path="/DCVisitPlanner/Dining/Dining5" component={Dining5}/>

          <Route path="/DCVisitPlanner/Shopping/Shopping1" component={Shopping1}/>
          <Route path="/DCVisitPlanner/Shopping/Shopping2" component={Shopping2}/>
          <Route path="/DCVisitPlanner/Shopping/Shopping3" component={Shopping3}/>
          <Route path="/DCVisitPlanner/Shopping/Shopping4" component={Shopping4}/>
          <Route path="/DCVisitPlanner/Shopping/Shopping5" component={Shopping5}/>

          <Route path="/DCVisitPlanner/Transport/Transport1" component={Transport1}/>
          <Route path="/DCVisitPlanner/Transport/Transport2" component={Transport2}/>

          <br /><br /><br /><br /><br /><br /><br />
          </div>
          <Footer />
        </div>
    </Router>

    );
  }
}

const mapStateToProps = (state) => {
  return {
      link: state.link
  };
};

export default connect(mapStateToProps)(Favorites);
