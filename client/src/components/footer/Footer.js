import React from 'react';
import './Footer.scss'

export default function Footer(props) {
  return (
    <div className="footer">
      <h2><span><i className="fas fa-map-marker-alt"></i>{props.city}</span></h2>
      <div className = "icons">
      <i className="fab fa-facebook"></i>
      <i className="fab fa-pinterest"></i>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-youtube"></i>
      <i className="fab fa-twitter-square"></i>
        </div>
          <p className = "address">{props.address}</p>
<hr/>

{props.schedule}
    </div>
  )
}
