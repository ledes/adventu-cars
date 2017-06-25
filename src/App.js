import React, { Component } from 'react';
import './App.css';

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
      </div>
    );
  }
}

export default App;
