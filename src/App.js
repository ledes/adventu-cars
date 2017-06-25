import React, { Component } from 'react';
import SearchForm from './components/searchForm';
import './styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: []
    };
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Rent a car and start a new adventure
        </p>
        <div className="main-container">
          <SearchForm/>
        </div>
      </div>
    );
  }
}

export default App;
