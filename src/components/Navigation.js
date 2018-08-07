import React from "react";
import { NavLink } from 'react-router-dom';

function Font1() {
  return (
    <span class="dot1"><i class="fa fa-heart-o fa-2x"></i></span>
  )
}
function Font2() {
  return (
    <span class="dot1"><i class="fa fa-search fa-2x"></i></span>
  )
}
function Font3() {
  return (
    <i class="fa fa-bed fa-2x"></i>
  )
}
function Font4() {
  return (
    <i class="fa fa-cutlery fa-2x"></i>
  )
}
function Font5() {
  return (
    <i class="fa fa-shopping-bag fa-2x"></i>
  )
}
function Font6() {
  return (
    <i class="fa fa-university fa-2x"></i>
  )
}
function Font7() {
  return (
    <span class="dot1"><i class="fa fa-subway fa-2x"></i></span>
  )
}
function Font8() {
  return (
    <span class="dot1"><i class="fa fa-thermometer fa-2x"></i></span>
  )
}
function Font9() {
  return (
    <span class="dot1"><i class="fa fa-check-square-o fa-2x"></i></span>
  )
}

function Font10() {
  return (
    <span class="dot1"><i class="fa fa-home fa-2x"></i></span>
  )
}

const Navigation = () => {
  return (
    <div id="content">
    <main>
    <NavLink to="/DCVisitPlanner/Museums" activeStyle={{ color: 'grey'}}>
      <Font6 />
    </NavLink>
    </main>
    <aside>
    <NavLink to="/DCVisitPlanner/Dining" activeStyle={{ color: 'grey'}}>
      <Font4 />
    </NavLink>
    </aside>
    <section>
    <NavLink to="/DCVisitPlanner/Shopping" activeStyle={{ color: 'grey'}}>
    <Font5 />
    </NavLink>
    </section>
    <footer>
    <NavLink to="/DCVisitPlanner/Hotels" activeStyle={{ color: 'grey'}}>
    <Font3 />
    </NavLink>
    </footer>
    <header>
    <NavLink to="/DCVisitPlanner" exact activeStyle={{ color: 'grey'}}>
      <Font10 />
    </NavLink>{' '}
    <NavLink to="/DCVisitPlanner/Transport" activeStyle={{ color: 'grey'}}>
    <Font7 />
    </NavLink>{' '}
    <NavLink to="/DCVisitPlanner/Weather" activeStyle={{ color: 'grey'}}>
    <Font8 />
    </NavLink>{' '}
    <NavLink to="/DCVisitPlanner/Todo" activeStyle={{ color: 'grey'}}>
    <Font9 />
    </NavLink>{' '}
    <NavLink to="/DCVisitPlanner/Favorites" activeStyle={{ color: 'grey'}}>
      <Font1 />
    </NavLink>{' '}
    <NavLink to="/DCVisitPlanner/Search" activeStyle={{ color: 'grey'}}>
    <Font2 />
    </NavLink>
    </header>
    </div>

  );
};

export default Navigation;
