import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/car-list-entry.scss';

class CarListEntry extends Component {
  render() {
    return (
      <div className="car-info">
        <div className="sub-row">
          <h3>{this.props.car.possibleModels}</h3>
          <div className="link-column">
            <a href={this.props.car.deepLink} target='_blank' rel="noopener noreferrer">
            <i className="fa fa-link" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="car-description">
          <div className='type-column'>
            <p>{this.props.car.typicalSeating}</p>
          </div>
          <div className="price-column">
            <p>Daily rate: ${this.props.car.dailyRate}</p>
          </div>
          <div className="price-column">
            <p>Total rate: ${this.props.car.totalPrice}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default CarListEntry;

CarListEntry.propTypes = {
  car: PropTypes.object.isRequired
};
