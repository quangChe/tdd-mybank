import balanceReducer from './my-balance';
import * as constants from '../actions/constants';

describe('Balance Reducer', () => {
  it('sets a balance', () => {
    const balance = 10;

    expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance}))
      .toEqual(balance);
  })

  it('deposits into the balance', () => {
    const deposit = 1000;
    const startingBalance = 100;

    expect(balanceReducer(startingBalance, {type: constants.DEPOSIT, deposit}))
      .toEqual(startingBalance + deposit);
  })

  it('withdraws from the balance', () => {
    const withdrawal = 50;
    const startingBalance = 1000;

    expect(balanceReducer(startingBalance, {type: constants.WITHDRAW, withdrawal}))
      .toEqual(startingBalance - withdrawal);
  })
})