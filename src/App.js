import React, { Component } from 'react';

import Cases from './components/Cases';
import ValuesTable from './components/ValuesTable';
import Header from './components/Header';
import TurnInfo from './components/TurnInfo';

import './App.css';

const CASE_VALUES = [0.01, 1, 5, 10, 25, 50, 75, 100,
	200, 300, 400, 500, 750, 1000, 5000, 10000, 25000, 50000,
	75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: this.createCases(),
			initialCaseChosen: false,
			initialCase: '',
			initialCaseNum: 0,
    }
  }

  createCases = () => {
    let cases = [];

    CASE_VALUES.forEach((value, index) => {
      cases.push({
        value,
        caseNum: index + 1,
        opened: false,
      });
    });

    return cases;
  }

	chooseCase = (caseNum) => {
		if (!this.state.initialCaseChosen) {
			this.setState({
				cases: this.state.cases,
				initialCaseChosen: true,
				initialCase: this.state.cases[caseNum - 1],
				initialCaseNum: caseNum,
			});
		}
	}

  render() {
    return (
      <div className="App">
				<Header />
				<TurnInfo
					initialCaseChosen={this.state.initialCaseChosen}
					initialCaseNum={this.state.initialCaseNum}/>
        <div className="game-cases-info" style={{
            display: 'flex',
          }}>
          <div className="cases">
            <Cases cases={this.state.cases}
							chooseCase={this.chooseCase}
							initialCaseNum={this.state.initialCaseNum} />
          </div>
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
