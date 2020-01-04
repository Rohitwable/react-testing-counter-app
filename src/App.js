import React, { useState } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }
  render() {
    return (
      <div className="App" data-test="app-component">
        <h1 data-test="counter-display">The counter is currently{this.state.counter}</h1>
        <button data-test="counter-button" onClick={() => this.setState({counter: this.state.counter + 1})}>Counter</button>
      </div>
    );

  }
}

export default App;
