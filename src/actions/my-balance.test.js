import * as constants from './constants';
import * as actions from './my-balance';

describe('Balance Action Creators', () => {
  it('creates an action to set the balance', () => {
    const balance = 0;
    const expectedAction = {type: constants.SET_BALANCE, balance };
    expect(actions.setBalance(balance)).toEqual(expectedAction);
  })

  it('creates an action to deposit into the balance', () => {
    const deposit = 1000;
    const expectedAction = {type: constants.DEPOSIT, deposit };
    expect(actions.deposit(deposit)).toEqual(expectedAction);
  })

  it('creates an action to withdraw from the balance', () => {
    const withdrawal = 50;
    const expectedAction = {type: constants.WITHDRAW, withdrawal};
    expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
  })
})