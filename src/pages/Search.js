import React from "react";
import { NavLink } from 'react-router-dom';
import Footer from "../components/Footer";

const Font12 = () => {
  return (
    <i class="fa fa-folder-open fa-2x" aria-hidden="true"></i>
  )
}

const Font13 = () => {
  return (
    <i class="fa fa-file-text-o" aria-hidden="true"></i>
  )
}

const Font14 = () => {
  return (
    <i class="fa fa-file-text-o fa-2x" aria-hidden="true"></i>
  )
}

const Font15 = () => {
  return (
    <i class="fa fa-folder-open fa-3x" aria-hidden="true"></i>
  )
}

class Search extends React.Component {

  onClick() {
      window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <h2>Sitemap</h2>
        <div className="items">
          <Font15 /> DC Visit Planner <br />
          <NavLink to='/DCVisitPlanner/Museums'><Font12 /></NavLink> Monuments/Museums <br />
          <NavLink to='/DCVisitPlanner/Museums/Museum1'><Font13 /></NavLink> Arlington National Cemetary <br />
          <NavLink to='/DCVisitPlanner/Museums/Museum2'><Font13 /></NavLink> International Spy Museum <br />
          <NavLink to='/DCVisitPlanner/Museums/Museum3'><Font13 /></NavLink> National Museum of African American History and Culture<br />
          <NavLink to='/DCVisitPlanner/Museums/Museum4'><Font13 /></NavLink> National World War II Memorial <br />
          <NavLink to='/DCVisitPlanner/Museums/Museum5'><Font13 /></NavLink> United States Holocaust Memorial Museum <br />
          <NavLink to='/DCVisitPlanner/Dining'><Font12 /></NavLink> Dining <br />
          <NavLink to='/DCVisitPlanner/Dining/Dining1'><Font13 /></NavLink> Beefsteak <br />
          <NavLink to='/DCVisitPlanner/Dining/Dining2'><Font13 /></NavLink> Chix <br />
          <NavLink to='/DCVisitPlanner/Dining/Dining3'><Font13 /></NavLink> District Taco <br />
          <NavLink to='/DCVisitPlanner/Dining/Dining4'><Font13 /></NavLink> The Hamilton <br />
          <NavLink to='/DCVisitPlanner/Dining/Dining5'><Font13 /></NavLink> Union Market <br />
          <NavLink to='/DCVisitPlanner/Shopping'><Font12 /></NavLink> Shopping <br />
          <NavLink to='/DCVisitPlanner/Shopping/Shopping1'><Font13 /></NavLink> CityCenterDC <br />
          <NavLink to='/DCVisitPlanner/Shopping/Shopping2'><Font13 /></NavLink> Fashion Centre at Pentagon City <br />
          <NavLink to='/DCVisitPlanner/Shopping/Shopping3'><Font13 /></NavLink> Georgetown <br />
          <NavLink to='/DCVisitPlanner/Shopping/Shopping4'><Font13 /></NavLink> Mazza Gallerie <br />
          <NavLink to='/DCVisitPlanner/Shopping/Shopping5'><Font13 /></NavLink> Tysons Corner Center <br />
          <NavLink to='/DCVisitPlanner/Hotels'><Font12 /></NavLink> Hotels <br />
          <NavLink to='/DCVisitPlanner/Hotels/Hotel1'><Font13 /></NavLink> Hotel Lombardy <br />
          <NavLink to='/DCVisitPlanner/Hotels/Hotel2'><Font13 /></NavLink> Kimpton Hotel Rouge <br />
          <NavLink to='/DCVisitPlanner/Hotels/Hotel3'><Font13 /></NavLink> Mandarin Oriental <br />
          <NavLink to='/DCVisitPlanner/Hotels/Hotel4'><Font13 /></NavLink> The Watergate Hotel <br />
          <NavLink to='/DCVisitPlanner/Hotels/Hotel5'><Font13 /></NavLink> Washington Plaza Hotel <br />
          <NavLink to='/DCVisitPlanner/' exact ><Font14 /></NavLink> Home <br />
          <NavLink to='/DCVisitPlanner/Transport'><Font12 /></NavLink> Transport <br />
          <NavLink to='/DCVisitPlanner/Transport/Transport1'><Font13 /></NavLink> capital bikeshare <br />
          <NavLink to='/DCVisitPlanner/Transport/Transport2'><Font13 /></NavLink> Metro <br />
          <NavLink to='/DCVisitPlanner/Weather'><Font14 /></NavLink> Weather <br />
          <NavLink to='/DCVisitPlanner/Todo'><Font14 /></NavLink> Todos <br />
          <NavLink to='/DCVisitPlanner/Favorites'><Font14 /></NavLink> Favorites <br />
          <div onClick={this.onClick}><Font14 /> Sitemap </div> <br />
        </div>

        <br /><br /><br /><br /><br /><br /><br />
        <Footer />
      </div>
    );
  }
};

export default Search;
