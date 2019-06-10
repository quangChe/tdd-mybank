import React from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/my-balance';

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

  withdraw = () => {
    this.props.withdraw(this.state.amount);
  }

  render() {
    const { balance } = this.props;
    return (
      <div>
        <h3 className='balance'>Wallet balance: { balance }</h3>
        <br/>
        <input type='number'
          onChange={this.changeAmount}
          className='wallet-input'/>
        <button
          className='deposit-btn'
          onClick={this.deposit}>Deposit</button>
        <button
          className='withdraw-btn'
          onClick={this.withdraw}>Withdraw</button>
      </div>
    )
  }
}

const mapStateToProps = ({ balance }) => ({ balance })

export default connect(mapStateToProps, { deposit, withdraw })(Wallet);