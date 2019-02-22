import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TurnInfo extends Component {
  render() {
    if (this.props.initialCaseNum === 0) {
      return <h2>Please choose the case you wish to keep.</h2>;
    }
    return this.props.numCasesToChoose !== 0 ?
    <div className="turn-info">
      <h2>Your case: {this.props.initialCaseNum}</h2>
      <p>Please choose {this.props.numCasesToChoose} more case(s)</p>
    </div>
    :
    <div className="offer-info">
      <h2>Offer: {this.props.offer}</h2>
      <button onClick={this.props.acceptDeal}>Deal</button>or<button onClick={this.props.rejectDeal}>No Deal?</button>
    </div>
  }
}

TurnInfo.propTypes = {
  numCasesToChoose: PropTypes.number.isRequired,
  initialCaseNum: PropTypes.number.isRequired,
  offer: PropTypes.string.isRequired,
  acceptDeal: PropTypes.func.isRequired,
  rejectDeal: PropTypes.func.isRequired,
};

export default TurnInfo;
