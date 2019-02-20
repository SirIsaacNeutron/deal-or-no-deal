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
          <ValuesTableCell case={this.props.cases[i]} />
          <ValuesTableCell case={this.props.cases[i + 13]} />
        </tr>
      );
    }

    return (
      <table>
        <tbody>
          {tableElements}
        </tbody>
      </table>
    );
  }
}

ValuesTable.propTypes = {
  cases: PropTypes.array.isRequired,
};

export default ValuesTable;
