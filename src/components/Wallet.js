import React from 'react';
import { connect } from 'react-redux';

export class Wallet extends React.Component {
  render() {
    const { balance } = this.props
    return (
      <div>
        <h3 className="balance">Wallet balance: { balance }</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  balance: state
})

export default connect(mapStateToProps, null)(Wallet);