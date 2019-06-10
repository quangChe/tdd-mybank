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
    const { bitcoin, balance } = this.props;
    if (Object.keys(bitcoin).length === 0) return '';

    return balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
  }

  render() {
    return (
      <h3>Bitcoin balance: { this.computeBitcoin() }</h3>
    )
  }
}

const mapStateToProps = ({ bitcoin, balance }) => ({ bitcoin, balance })

export default connect(mapStateToProps, { fetchBitcoin })(Loot);