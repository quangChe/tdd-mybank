import React from 'react';
import Wallet from './Wallet';
import Loot from './Loot';

class App extends React.Component {
  render () {
    return (
    <>
      <h2>My Bank</h2>
      <hr/>
      <Wallet />
      <hr/>
      <Loot />
    </>
    );
  }
}

export default App;
