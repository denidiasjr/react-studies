import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: false,
      counter: 0
    }
  }

  handleIncrementClick = () => {
    this.setState({
      counter: this.state.counter + 1,
      error: false
    })
  }

  handleDecrementClick = () => {
    this.setState({
      counter: this.state.counter ? this.state.counter - 1 : 0,
      error: !this.state.counter
    })
  }

  render() {
    const errorMessageStyle = {
      color: 'red'
    };

    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        {this.state.error &&
          <h2
            data-test="error-message"
            style={errorMessageStyle}
          >
            Counter can't go below zero
          </h2>
        }
        <button
          data-test="increment-button"
          onClick={this.handleIncrementClick}
        >
          Increment counter
        </button>
        <button
          data-test="decrement-button"
          onClick={this.handleDecrementClick}
        >
          Decrement counter
        </button>
      </div>
    )
  }
}

export default App;
