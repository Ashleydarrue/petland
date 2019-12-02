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
              <li><Link to="/" className="navLinks">Breeds</Link></li>
              <li><Link to="/" className="navLinks">Products</Link></li>
              <li><Link to="/" className="navLinks">Perks</Link></li>
              <li><Link to="/" className="navLinks">Cares</Link></li>
              <li><Link to="/" className="navLinks">FINANCING</Link></li>
              <li><Link to="/" className="navLinks">About</Link></li>
              <li><Link to="/" className="navLinks">Contact</Link></li>
            </ul>
          </div>
        </nav>
      
        <ul className="sidenav" id="mobile-demo">
               {/* <i className="material-icons right">close</i> */}
              <li><Link to="/" className="navLinks">Breeds</Link></li>
              <li><Link to="/" className="navLinks">Products</Link></li>
              <li><Link to="/" className="navLinks">Perks</Link></li>
              <li><Link to="/" className="navLinks">Cares</Link></li>
              <li><Link to="/" className="navLinks">Financing</Link></li>
              <li><Link to="/" className="navLinks">About</Link></li>
              <li><Link to="/" className="navLinks">Contact</Link></li>
        </ul>

    </React.Fragment>
    )
  }
}


