import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const wallet = shallow(<Wallet balance={20} />);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  })

  it('correctly displays balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20')
  })
})