import React from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends React.Component {
  componentDidMount() { 
    if (this.props.fetchBitcoin) {
      this.props.fetchBitcoin();
    }
  }

  render() {
    return (
      <h3>Bitcoin balance: </h3>
    )
  }
}

const mapStateToProps = ({ bitcoin }) => ({ bitcoin })

export default connect(mapStateToProps, { fetchBitcoin })(Loot);