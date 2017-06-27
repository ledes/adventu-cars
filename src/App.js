import React, { Component } from 'react';
import SearchForm from './components/searchForm';
import CarList from './components/carList';
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
      cars: [],
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
    this.setState({ loading: true, cars: [], errors: [] });
    $.ajax({
      url: formattedUrl,
      type: 'GET',
      crossDomain: true,
      dataType: 'jsonp',
      context: this,
      success: function(response) {
        //Any response with a StatusCode of "0" is a successful request
        if (response.StatusCode === '0') {
          let formattedCars = this.formatCars(response.Result, response.MetaData.CarMetaData.CarTypes);
          this.setState({
            cars: formattedCars,
            loading: false
          });
        } else {
          let formattedErrors = this.formatErrors(response);
          this.setState({
            errors: formattedErrors,
            loading: false
          });
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        this.setState({
          errors: ['Something went wrong, please try again later'],
          loading: false
        });
      },
    })
  }


  formatErrors(response) {
    let errors = [];
    let defaultErrorMessage = 'Something went wrong, please try again later';
    if (_.isObject(response.Errors)) {
      errors.push(response.Errors.Error.ErrorMessage);
    } else if (_.isArray(response.Errors)) {
      _.forEach(response.Errors, error => {
        errors.push(error.Error.ErrorMessage);
      });
    } else {
      errors.push(defaultErrorMessage);
    }
    return errors;
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

  formatCars(cars, metadata) {
    return _.map(cars, car => {
      let meta = _.find(metadata, carType => { return carType.CarTypeCode === car.CarTypeCode });
      return {
        resultId: car.ResultId,
        deepLink: car.DeepLink,
        dailyRate: car.DailyRate,
        totalPrice: car.TotalPrice,
        carTypeName: meta.CarTypeName,
        possibleModels: meta.PossibleModels,
        typicalSeating: meta.TypicalSeating
      };
    })
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
        {this.state.cars.length > 0 || this.state.errors.length > 0 ? <CarList errors={this.state.errors} cars={this.state.cars} /> : null }
      </div>
    );
  }
}

export default App;
