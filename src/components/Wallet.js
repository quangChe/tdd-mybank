import React from 'react';
import { connect } from 'react-redux';
import { balance } from '../actions/my-balance';

export class Wallet extends React.Component {
  state = {
    amount: 0,
  }

  changeAmount = (e) => {
    this.setState({ amount: parseInt(e.target.value, 10) });
  }

  deposit = () => {
    this.props.deposit(this.state.amount);
  }

  render() {
    const { balance } = this.props;
    
    return (
      <div>
        <h3 className='balance'>Wallet balance: { balance }</h3>
        <br/>
        <input 
          onChange={this.changeAmount}
          className='wallet-input'/>
        <button
          className='deposit-btn'
          onClick={this.deposit}>Deposit</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  balance: state
})

export default connect(mapStateToProps, null)(Wallet);