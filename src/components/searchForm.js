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

  handleLocationChange(location) {
    let payload = {
      action: "LOCATION_CHANGED",
      value: location
    };
    this.props.onAction(payload);
  }

  onSuggestLocationSelect(location) {
    let payload = {
      action: "LOCATION_CHANGED",
      value: location.gmaps.formatted_address
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

  handleStartHourChange(hour) {
    let payload = {
      action: "START_HOUR_CHANGED",
      value: hour
    };
    this.props.onAction(payload);
  }

  handleEndHourChange(hour) {
    let payload = {
      action: "END_HOUR_CHANGED",
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
        <div className="location-group">
          <label>Where</label>
          <Geosuggest
          initialValue={this.props.location}
          placeholder={'Enter city, airport or address'}
          onChange={this.handleLocationChange.bind(this)}
          onSuggestSelect={this.onSuggestLocationSelect.bind(this)}/>
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
              selectedHour={this.props.startHour}
              onChangeHour={this.handleStartHourChange.bind(this)}/>
          </div>
        </div>
        <div className="date-group">
          <label>Until</label>
          <div>
            <DatePicker
              placeholderText="Click the ending date"
              minDate={this.props.startDate}
              startDate={this.props.startDate}
              endDate={this.props.endDate}
              selected={this.props.endDate}
              onChange={this.handleEndDateChange.bind(this)}/>
            <TimePicker
              selectedHour={this.props.endHour}
              onChangeHour={this.handleEndHourChange.bind(this)}/>
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
  location: PropTypes.string.isRequired,
  startDate: PropTypes.object.isRequired,
  endDate: PropTypes.object.isRequired,
  startHour: PropTypes.string.isRequired,
  endHour: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired
};

export default SearchForm;
