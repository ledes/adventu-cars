import React, { Component } from 'react';
import '../styles/search-form.scss';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class SearchForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: null
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
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

  render() {
    return (
      <div className="form-group">
        <div className="location-group">
          <label>Where</label>
        </div>
        <div className="start-date-group">
          <label>When</label>
          <DatePicker
            minDate={moment()}
            selected={this.state.startDate}
            onChange={this.handleStartDateChange}/>
        </div>
        <div className="end-date-group">
          <label>Until</label>
          <DatePicker
            placeholderText="Click to select a date"
            minDate={moment()}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            selected={this.state.endDate}
            onChange={this.handleEndDateChange}/>
        </div>
        <div className="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default SearchForm;
