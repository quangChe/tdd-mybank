import React from 'react';
import { connect } from 'react-redux';

export class Wallet extends React.Component {
  render() {
    console.log(this.props.balance);
    return (
      <div>
        <h3>Wallet balance</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  balance: state
})

export default connect(mapStateToProps, null)(Wallet);