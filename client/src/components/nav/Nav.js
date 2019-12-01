import React, { Component, } from 'react';
import {Link} from 'react-router-dom';
import './Nav.scss';


export default class Nav extends Component {

  render() {
    return (
    <React.Fragment>
          <nav>
          <div className="nav-wrapper">
          <Link to="/" className="brand-logo center "><img id='Logo' src={'../../../petLandLogo2.png'} alt={'Logo'}/></Link>
            <Link to="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/">Perks</Link></li>
              <li><Link to="/">Breeds</Link></li>
              <li><Link to="/">Products</Link></li>
              <li><Link to="/">Cares</Link></li>
              <li><Link to="/">FINANCING</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>
        </nav>
      
        <ul className="sidenav" id="mobile-demo">
          <li><Link to="mobile.html">Sass</Link></li>
          <li><Link to="badges.html">Components</Link></li>
          <li><Link to="collapsible.html">Javascript</Link></li>
          <li><Link to="mobile.html">Mobile</Link></li>
        </ul>

    </React.Fragment>
    )
  }
}


