import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PropTypes from 'prop-types';
import Geosuggest from 'react-geosuggest';
import TimePicker from '../components/timePicker';
import '../styles/search-form.scss';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/geosuggest.scss'

class SearchForm extends Component {

  handleDestinationChange(destination) {
    let payload = {
      action: "DESTINATION_CHANGED",
      value: destination
    };
    this.props.onAction(payload);
  }

  onSuggestDestinationSelect(destination) {
    let payload = {
      action: "DESTINATION_CHANGED",
      value: destination.gmaps.formatted_address
    };
    this.props.onAction(payload);
  }

  handleStartDateChange(date) {
    let payload = {
      action: "START_DATE_CHANGED",
      value: date
    };
    this.props.onAction(payload);
  }

  handleEndDateChange(date) {
    let payload = {
      action: "END_DATE_CHANGED",
      value: date
    };
    this.props.onAction(payload);
  }

  handlePickUpTimeChange(hour) {
    let payload = {
      action: "PICK_UP_TIME_CHANGED",
      value: hour
    };
    this.props.onAction(payload);
  }

  handleDropOffTimeChange(hour) {
    let payload = {
      action: "DROP_OFF_TIME_CHANGED",
      value: hour
    };
    this.props.onAction(payload);
  }

  submit() {
    let payload = { action: "SUBMIT" };
    this.props.onAction(payload);
  }
  // Render

  render() {
    return (
      <div className="form-group">
        <div className="dest-group">
          <label>Where</label>
          <Geosuggest
          initialValue={this.props.dest}
          placeholder={'Enter city, airport or address'}
          onChange={this.handleDestinationChange.bind(this)}
          onSuggestSelect={this.onSuggestDestinationSelect.bind(this)}/>
        </div>
        <div className="date-group">
          <label>When</label>
          <div>
            <DatePicker
              minDate={moment()}
              startDate={this.props.startDate}
              endDate={this.props.endDate}
              selected={this.props.startDate}
              onChange={this.handleStartDateChange.bind(this)}/>
            <TimePicker
              selectedHour={this.props.pickUpTime}
              onChangeHour={this.handlePickUpTimeChange.bind(this)}/>
          </div>
        </div>
        <div className="date-group">
          <label>Until</label>
          <div>
            <DatePicker
              placeholderText="mm/dd/yy"
              minDate={this.props.startDate}
              startDate={this.props.startDate}
              endDate={this.props.endDate}
              selected={this.props.endDate}
              onChange={this.handleEndDateChange.bind(this)}/>
            <TimePicker
              selectedHour={this.props.dropOffTime}
              onChangeHour={this.handleDropOffTimeChange.bind(this)}/>
          </div>
        </div>
        <div className="submit"
             onClick={this.submit.bind(this)} >
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  dest: PropTypes.string.isRequired,
  startDate: PropTypes.object.isRequired,
  endDate: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  pickUpTime: PropTypes.string.isRequired,
  dropOffTime: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired
};

export default SearchForm;
