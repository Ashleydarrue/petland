import React, { Component } from 'react';

export default class Pets extends Component {

  render() {
    return (
      <React.Fragment>
      <div>
        {this.props.name}
        {this.props.dob}
        {this.props.breed}
        {this.props.gender}
        {this.props.location}
      </div>
      </React.Fragment>
    )
  }
}