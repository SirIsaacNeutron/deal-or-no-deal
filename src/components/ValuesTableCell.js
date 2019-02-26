import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ValuesTableCell extends Component {
  render() {
    const caseValue = this.props.case.value;
    return this.props.case.opened ?
      <td class="ValuesTableCell" style={{backgroundColor: "#888"}}>
        {this.props.formatMoney(caseValue, 0)}
      </td> :
      <td class="ValuesTableCell" style={{backgroundColor: "#ff6"}}>
        {this.props.formatMoney(caseValue, 0)}
      </td>
  }
}

ValuesTableCell.propTypes = {
  case: PropTypes.object.isRequired,
  formatMoney: PropTypes.func.isRequired,
};

export default ValuesTableCell;
