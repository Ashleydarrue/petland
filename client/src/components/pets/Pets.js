import React, { Component} from 'react';
import './Pets.scss'

export default class Pets extends Component {

  render() {
    return (
      <div className="card small">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="../../../christamsDoggie.jpeg" alt="placeHolderImage"/>
    </div>
    <div className="card-content activator">
  <p className=" activator petInfo">{this.props.petType}<i class="fas fa-paw"></i>{this.props.gender}<i class="fas fa-paw"></i>refid:{this.props.refId}<i class="fas fa-paw"></i>{this.props.dob}</p>
    <span className="card-title grey-text text-darken-4 activator title1">{this.props.name}{' '}<i className="fas fa-bone"></i>{' '}{this.props.breed}</span>
    {/* <p><a href="#">Learn more about {this.props.breed}!</a></p> */}
    <p className="locationButton left"><i className="fas fa-map-marker-alt"></i>{' '}Location: {this.props.location}</p>
    <a href={'#'} className="infoButton right"><i class="fas fa-info"></i>{' '}</a>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4 title2">{this.props.name}'s Bio<i className="material-icons right">close</i></span>
        <span className="petBreed"><p>{this.props.breed}</p></span>
     {/* <span class="infoRow"><p>Breed</p><p>{this.props.breed}</p></span> */}
     <span class="infoRow"><p>Color</p><p>Black</p></span>
     <span class="infoRow"><p>Gender</p><p>{this.props.gender}</p></span>
     <span class="infoRow"><p>Weight</p><p>25 LB</p></span>
     <span class="infoRow"><p>Birthday</p><p>{this.props.dob}</p></span>
     <span class="infoRow"><p>Location</p><p>{this.props.location}</p></span>
     <span class="infoRow"><p>REFID</p><p>{this.props.refId}</p></span>
     <div className="btnContainer">
    <button className="btn-small inquireBtn"><i class="fas fa-info"></i>{' '}Inquire Today</button>
  <button className="btn-small inquireBtn"><i class="fas fa-phone-alt"></i>{' '}Call to reserve</button>
     </div>
    </div>
  </div>
    )
  }
}

{/* <span><i className="fas fa-chevron-up  activator right"></i></span> */}