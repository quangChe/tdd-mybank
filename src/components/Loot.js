import React from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends React.Component {
  componentDidMount() { 
    if (this.props.fetchBitcoin) {
      this.props.fetchBitcoin();
    }
  }

  computeBitcoin = () => {
    const { bitcoin } = this.props;
    if (Object.keys(bitcoin).length === 0) return '';

    return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
  }

  render() {
    return (
      <h3>Bitcoin balance: { this.computeBitcoin() }</h3>
    )
  }
}

const mapStateToProps = ({ bitcoin }) => ({ bitcoin })

export default connect(mapStateToProps, { fetchBitcoin })(Loot);