import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Geosuggest from 'react-geosuggest';
import TimePicker from '../components/timePicker';
import '../styles/search-form.scss';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/geosuggest.scss'

class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startDate: moment(),
      endDate: null,
      startHour: '0:00', //change this so if someone doesnt change it, it still works
      endHour: '0:00',
    };
  }
  // Actions

  handleStartDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleEndDateChange(date) {
    this.setState({
      endDate: date
    });
  }

  handleStartHourChange(hour) {
    this.setState({
      startHour: hour
    });
  }

  handleEndHourChange(hour) {
    this.setState({
      endHour: hour
    });
  }
  // Render

  render() {
    return (
      <div className="form-group">
        <div className="location-group">
          <label>Where</label>
        </div>
        <div className="start-date-group">
          <label>When</label>
          <Geosuggest />
          <DatePicker
            minDate={moment()}
            selected={this.state.startDate}
            onChange={this.handleStartDateChange.bind(this)}/>
          <TimePicker
            selectedHour={this.state.startHour}
            onChangeHour={this.handleStartHourChange.bind(this)}/>
        </div>
        <div className="end-date-group">
          <label>Until</label>
          <DatePicker
            placeholderText="Click the ending date"
            minDate={moment()}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            selected={this.state.endDate}
            onChange={this.handleEndDateChange.bind(this)}/>
          <TimePicker
            selectedHour={this.state.endHour}
            onChangeHour={this.handleEndHourChange.bind(this)}/>
        </div>
        <div className="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default SearchForm;
