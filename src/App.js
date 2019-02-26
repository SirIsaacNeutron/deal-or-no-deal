import React, { Component } from 'react';

import Cases from './components/Cases';
import ValuesTable from './components/ValuesTable';
import Header from './components/Header';
import TurnInfo from './components/TurnInfo';

import './App.css';

const CASE_VALUES = [0.01, 1, 5, 10, 25, 50, 75, 100,
	200, 300, 400, 500, 750, 1000, 5000, 10000, 25000, 50000,
	75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000];

const ORIGINAL_NUM_CHOICES = 6;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: this.createCases(),
			initialCaseChosen: false,
			initialCase: '',
			initialCaseNum: 0,
			numCasesToChoose: ORIGINAL_NUM_CHOICES,
			caseChosenNormally: '',
			offer: 0,
			turnNum: 1,
			numCasesRemaining: 26,
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
				initialCaseChosen: true,
				initialCase: this.state.cases[caseNum - 1],
				initialCaseNum: caseNum,
			});
		}
		else {
			this.state.cases[caseNum - 1].opened = true;
			this.setState({
				numCasesToChoose: this.state.numCasesToChoose - 1,
				caseChosenNormally: this.state.cases[caseNum - 1],
			});
		}

		this.setState({
			numCasesRemaining: this.state.numCasesRemaining - 1,
		});

		if (this.state.numCasesToChoose - 1 === 0) {
			this.calculateOffer();
		}
	}

	calculateOffer = () => {
		// Using a rough formula from this link:
		// https://answers.yahoo.com/question/index?qid=20061106173902AAc48qj
		const nonOpenedCases = [...this.state.cases.filter(c => !c.opened)];
		const valueOfCases = nonOpenedCases.reduce(
			(accumulator, c) => {
				return accumulator + c.value;
		}, 0);
		const averageValueOfCases = valueOfCases / nonOpenedCases.length;
		const newOffer =
			(averageValueOfCases * (this.state.turnNum / 10)).toFixed(2);

		this.setState({
			offer: newOffer,
		});
	}

	acceptDeal = () => {
		alert("You won " + this.formatMoney(this.state.offer) + "!"
					+ "\nThank you for playing Deal or No Deal!");
	}

	rejectDeal = () => {
		const newChoiceNum = ORIGINAL_NUM_CHOICES - this.state.turnNum;
		const newNumCasesToChoose = newChoiceNum > 1 ?
			newChoiceNum : 1;
		this.setState({
			turnNum: this.state.turnNum + 1,
			numCasesToChoose: newNumCasesToChoose,
		});
	}

	keepCase = () => {
		this.state.offer = this.state.initialCase.value;

		this.acceptDeal();
	}

	swapCase = () => {
		const lastCase = [...this.state.cases.filter(c => {
			return c !== this.state.initialCase && !c.opened;
		})][0];

		this.state.offer = lastCase.value;

		this.acceptDeal();
	}

	formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
		// Mostly copied from
		// https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript
	  try {
	    decimalCount = Math.abs(decimalCount);
	    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

	    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
	    let j = (i.length > 3) ? i.length % 3 : 0;

	    return "$" + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
	  } catch (e) {
	    console.log(e);
	  }
	}

  render() {
    return (
      <div className="App">
				<Header />
				<TurnInfo
					initialCaseNum={this.state.initialCaseNum}
					numCasesToChoose={this.state.numCasesToChoose}
					offer={this.state.offer}
					acceptDeal={this.acceptDeal}
					rejectDeal={this.rejectDeal}
					numCasesRemaining={this.state.numCasesRemaining}
					keepCase={this.keepCase}
					swapCase={this.swapCase}
					formatMoney={this.formatMoney}/>
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
          <ValuesTable
						cases={this.state.cases}
						formatMoney={this.formatMoney}/>
        </div>
      </div>
    );
  }
}

export default App;
