import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ValuesTableCell from './ValuesTableCell';

class ValuesTable extends Component {
  render() {
    let casesSortedByValue = [...this.props.cases];
    casesSortedByValue.sort((first, second) => {
      return first < second;
    });

    let tableElements = [];

    for (let i = 0; i < 13; ++i) {
      tableElements.push(
        <tr key={i + 1}>
          <ValuesTableCell
            case={this.props.cases[i]}
            formatMoney={this.props.formatMoney}/>
          <ValuesTableCell
            case={this.props.cases[i + 13]}
            formatMoney={this.props.formatMoney}/>
        </tr>
      );
    }

    return (
      <table class="ValuesTable">
        <tbody>
          {tableElements}
        </tbody>
      </table>
    );
  }
}

ValuesTable.propTypes = {
  cases: PropTypes.array.isRequired,
  formatMoney: PropTypes.func.isRequired,
};

export default ValuesTable;
