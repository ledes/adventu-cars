import React, { Component } from 'react';
import '../styles/search-form.scss';


class SearchForm extends Component {
  render() {
    return (
      <div className="form-group">
        <div className="location-group">
          <label>Where</label>
        </div>
        <div className="start-date-group">
          <label>When</label>

        </div>
        <div className="end-date-group">
          <label>Until</label>
        </div>
        <div className="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default SearchForm;
