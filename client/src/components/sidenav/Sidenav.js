import React, { Component, } from 'react';
import {Link} from 'react-router-dom';
import './Sidenav.scss';
import {call} from './call.svg';


export default class Sidenav extends Component {

  render() {
    return (
    <React.Fragment>
      <div className = 'sideNav'>
        <ul>
        <li>
        <i className ="fas fa-phone-alt"></i>


        </li>
        <li><i className="fas fa-bone"></i>
</li>
        <li><i className="fas fa-dog"></i>

</li>
        <li><i className="fas fa-dollar-sign"></i></li>
          </ul>
        </div>
    </React.Fragment>
    )
  }
}


