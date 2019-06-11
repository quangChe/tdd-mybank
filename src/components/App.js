import React from 'react';
import Wallet from './Wallet';
import Loot from './Loot';

const App = () => {
  return (
    <>
      <h2>My Bank</h2>
      <hr/>
      <Wallet />
      <hr/>
      <Loot />
      <div>Power by 
        <a rel='noopener or noreferrer' target='_blank' href='https://www.coindesk.com/price'>Coindesk</a>
      </div>
    </>
  );
}

export default App;
