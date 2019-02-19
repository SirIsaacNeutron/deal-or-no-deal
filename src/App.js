import React, { Component } from 'react';

import Cases from './components/Cases';
import ValuesTable from './components/ValuesTable';

import logo from './logo.svg';
import './App.css';

const CASE_VALUES = [0.01, 1, 5, 10, 25, 50, 75, 100,
	200, 300, 400, 500, 750, 1000, 5000, 10000, 25000, 50000,
	75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: this.createCases(),
    }
  }

  createCases = () => {
    let cases = [];

    CASE_VALUES.forEach((value, index) => {
      cases.push({
        value,
        caseNum: index + 1,
        chosen: false,
      });
    });

    return cases;
  }

  render() {
    return (
      <div className="App">
        <div className="game-cases-info" style={{
            display: 'flex',
          }}>
          <Cases cases={this.state.cases} />
          <li className="spacer" style={{
              visibility: 'hidden',
              flexGrow: '5',
            }} />
          <ValuesTable cases={this.state.cases} />
        </div>
      </div>
    );
  }
}

export default App;
