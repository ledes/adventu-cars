import React, { Component } from 'react';
import SearchForm from './components/searchForm';
import './styles/App.scss';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      startDate: moment(),
      endDate: moment(),
      startHour: '0:00',
      endHour: '0:00',
      result: []
    };
  }

  onAction(payload) {
    switch(payload.action){
      case "LOCATION_CHANGED":
        this.setState({ location: payload.value });
        break;
      case "START_DATE_CHANGED":
        this.setState({ startDate: payload.value });
        break;
      case "END_DATE_CHANGED":
        this.setState({ endDate: payload.value });
        break;
      case "START_HOUR_CHANGED":
        this.setState({ startHour: payload.value });
        break;
      case "END_HOUR_CHANGED":
        this.setState({ endHour: payload.value });
        break;
      case "SUBMIT":
        debugger;
        break;
      default:
        console.log("Caution! Action: '" + payload.action + "' was not handled.");
    }
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Rent a car and start a new adventure
        </p>
        <div className="main-container">
          <SearchForm
            location={this.state.location}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            startHour={this.state.startHour}
            endHour={this.state.endHour}
            onAction={this.onAction.bind(this)}
            />
        </div>
      </div>
    );
  }
}

export default App;
