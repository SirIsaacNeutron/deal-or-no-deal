import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Cases from './Cases';

class Case extends Component {
  render() {
    return (
      <button>{this.props.case.caseNum}</button>
    );
  }
}

Case.propTypes = {
  case: PropTypes.object.isRequired,
};

export default Case;
