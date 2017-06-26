import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarListEntry from '../components/carListEntry';
import '../styles/car-list.scss';
let _ = require('lodash');

class CarList extends Component {

  renderCars() {
    return _.map(this.props.cars, car => {
       return (<CarListEntry car={car} key={car.resultId}/>);
    });
  }

  renderErrors() {
    let errors = _.map(this.props.errors, (error, i) => {
      let formattedError = error.charAt(0).toUpperCase() + error.slice(1);
      return (<li key={`error${i}`} className='error-message'>{formattedError}</li>);
    });
    return(<ul className='error-list'>{errors}</ul>);
  }

  render() {

    return (
      <div className='car-list'>
        {this.props.errors.length > 0 ? this.renderErrors() : this.renderCars()}
      </div>
    );
  }
}
export default CarList;

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired
};
