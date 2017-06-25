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
      location: '',
      startDate: moment(),
      endDate: moment(),
      startHour: '0:00', //change this so if someone doesnt change it, it still works
      endHour: '0:00',
    };
  }
  // Actions

  handleLocationChange(location) {
    this.setState({
      location: location
    });
  }

  onSuggestLocationSelect(location) {
    this.setState({
      location: location.gmaps.formatted_address
    });
  }

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


  submit() {
    debugger;
  }
  // Render

  render() {
    return (
      <div className="form-group">
        <div className="location-group">
          <label>Where</label>
          <Geosuggest
          initialValue={this.state.location}
          placeholder={'Enter city, airport or address'}
          onChange={this.handleLocationChange.bind(this)}
          onSuggestSelect={this.onSuggestLocationSelect.bind(this)}/>
        </div>
        <div className="date-group">
          <label>When</label>
          <div>
            <DatePicker
              minDate={moment()}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              selected={this.state.startDate}
              onChange={this.handleStartDateChange.bind(this)}/>
            <TimePicker
              selectedHour={this.state.startHour}
              onChangeHour={this.handleStartHourChange.bind(this)}/>
          </div>
        </div>
        <div className="date-group">
          <label>Until</label>
          <div>
            <DatePicker
              placeholderText="Click the ending date"
              minDate={this.state.startDate}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              selected={this.state.endDate}
              onChange={this.handleEndDateChange.bind(this)}/>
            <TimePicker
              selectedHour={this.state.endHour}
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

export default SearchForm;
