import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ValuesTableCell extends Component {
  render() {
    const caseValue = this.props.case.value;
    return this.props.case.opened ?
      <td style={{textDecoration: 'line-through'}}>{caseValue}</td> :
      <td>{caseValue}</td>
  }
}

ValuesTableCell.propTypes = {
  case: PropTypes.object.isRequired,
};

export default ValuesTableCell;
