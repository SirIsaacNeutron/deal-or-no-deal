import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TurnInfo extends Component {
  render() {
    return this.props.initialCaseNum === 0 ?
      <h2>Please choose the case you wish to keep.</h2>
      :
      <h2>Your case: {this.props.initialCaseNum}</h2>
  }
}

TurnInfo.propTypes = {
  initialCaseChosen: PropTypes.bool.isRequired,
  initialCaseNum: PropTypes.number.isRequired,
};

export default TurnInfo;
