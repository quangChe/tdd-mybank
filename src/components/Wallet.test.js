import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const mockDepositFn = jest.fn();
  const props = {
    balance: 20,
    deposit: mockDepositFn,
  };
  const wallet = shallow(<Wallet {...props} />);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  })

  it('correctly displays balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20')
  })

  it('contains an input to enter deposit or withdraw amount', () => {
    expect(wallet.find('.wallet-input').exists()).toBe(true);
  })

  describe('when the user types into Wallet input', () => {
    const INPUT_VALUE = '1000';

    beforeEach(() => 
      wallet.find('.wallet-input').simulate('change', { target: { value: INPUT_VALUE }})
    )

    it('changes the `amount` state of the Wallet', () => {
      expect(wallet.state().amount).toBe(parseInt(INPUT_VALUE, 10));
    })

    describe('and the user wants to make a deposit', () => {
      beforeEach(() => 
        wallet.find('.deposit-btn').simulate('click')
      )

      it('dispatches the `deposit()` it receives from the props with local `amount` state', () => {
        expect(mockDepositFn).toHaveBeenCalledWith(parseInt(INPUT_VALUE, 10));
      })
    })
  })
})