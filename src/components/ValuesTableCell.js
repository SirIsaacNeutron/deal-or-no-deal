import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ValuesTableCell extends Component {
  render() {
    const caseValue = this.props.case.value;
    return this.props.case.opened ?
      <td class="ValuesTableCell" style={{backgroundColor: "#888"}}>{caseValue}</td> :
      <td class="ValuesTableCell" style={{backgroundColor: "#ff6"}}>{caseValue}</td>
  }
}

ValuesTableCell.propTypes = {
  case: PropTypes.object.isRequired,
};

export default ValuesTableCell;
