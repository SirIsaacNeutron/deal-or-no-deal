import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Case extends Component {
  render() {
    const { caseNum } = this.props.case;

    return this.props.initialCaseNum !== caseNum
      && !this.props.caseOpened ?
      <button
        onClick={this.props.chooseCase.bind(this, caseNum)}>
        {this.props.case.caseNum}
      </button>
      :
      <button>
        {' '}
      </button>
  }
}

Case.propTypes = {
  case: PropTypes.object.isRequired,
  chooseCase: PropTypes.func.isRequired,
  initialCaseNum: PropTypes.number.isRequired,
  caseOpened: PropTypes.bool.isRequired,
};

export default Case;
