import React, { Component } from 'react';
import SearchForm from './components/searchForm';
import './styles/App.scss';
import moment from 'moment';
import $ from 'jquery';
let _ = require('lodash');


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dest: '',
      startDate: moment(),
      endDate: '',
      pickUpTime: '0:00',
      dropOffTime: '0:00',
      loading: false,
      result: [],
      errors: []
    };
  }

  onAction(payload) {
    switch(payload.action){
      case "DESTINATION_CHANGED":
        this.setState({ dest: payload.value });
        break;
      case "START_DATE_CHANGED":
        this.setState({ startDate: payload.value });
        break;
      case "END_DATE_CHANGED":
        this.setState({ endDate: payload.value });
        break;
      case "PICK_UP_TIME_CHANGED":
        this.setState({ pickUpTime: payload.value });
        break;
      case "DROP_OFF_TIME_CHANGED":
        this.setState({ dropOffTime: payload.value });
        break;
      case "SUBMIT":
        let paramKeys = ['dest', 'startDate', 'endDate', 'pickUpTime', 'dropOffTime']
        let params = _.pickBy(this.state, (value, key) => {
          return _.includes(paramKeys, key);
        });
        this.findCars(params);
        break;
      default:
        console.log("Caution! Action: '" + payload.action + "' was not handled.");
    }
  }

  findCars(params) {
    const url = process.env.REACT_APP_HOTWIRE_API_URL + '/search/car?';
    const apiKey = process.env.REACT_APP_HOTWIRE_API_KEY;
    const format = 'jsonp';
    const formattedUrl = this.formatUrl(url, { ...params, format, apiKey });
    this.setState({ loading: true });
    $.ajax({
      url: formattedUrl,
      type: 'GET',
      crossDomain: true,
      dataType: 'jsonp',
      context: this,
      success: function(response) {
        //Any response with a StatusCode of "0" is a successful request
        if (response.StatusCode === '0') {
          this.setState({
            result: response.Result,
            loading: false
          });
        } else {
          this.setState({ loading: false });
          //TODO display errors in ui
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        this.setState({ loading: false });
        //TODO display errors in ui
      },
    })
  }

  formatUrl(url, params) {
    let str = url;
    _.forEach(params, (value, key) => {
      if (key === 'startDate' || key === 'endDate') {
        str += `&${key.toLowerCase()}=${encodeURIComponent(value.format('MM/DD/YYYY'))}`;
      } else {
        str += `&${key.toLowerCase()}=${encodeURIComponent(value.replace(/\s/g, ''))}`;
      }
    });
    return str;
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Rent a car and start a new adventure
        </p>
        <div className="main-container">
          <SearchForm
            loading={this.state.loading}
            dest={this.state.dest}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            pickUpTime={this.state.pickUpTime}
            dropOffTime={this.state.dropOffTime}
            onAction={this.onAction.bind(this)}
            />
        </div>
      </div>
    );
  }
}

export default App;
