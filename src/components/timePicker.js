import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/time-picker.scss';


const hours = [
  '0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00',
  '7:00', '8:00', '9:00', '10:00', "11:00", "12:00", "13:00",
  '14:00', "15:00", '16:00', '17:00', '18:00', '19:00', '20:00',
  '21:00', '22:00', "23:00"
];

class TimePicker extends Component {

  renderOptions() {
    return hours.map( (value, i) => <option key={i} value={value}>{value}</option> );
  }

  onTimeChanged(event) {
    this.props.onChangeHour(event.target.value);
  }

  render() {
    return (
      <select className='selectHour'
              value={this.props.selectedHour}
              onChange={this.onTimeChanged.bind(this)}>
        {this.renderOptions()}
      </select>
    );
  }
}

TimePicker.propTypes = {
  selectedHour: PropTypes.string.isRequired,
  onChangeHour: PropTypes.func.isRequired
};

export default TimePicker;


///proptypes for props
