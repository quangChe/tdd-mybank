import balanceReducer from './my-balance';
import * as constants from '../actions/constants';

describe('Balance Reducer', () => {
  
  describe('when initializing', () => {
    const balance = 10;
    
    it('sets a balance', () => {  
      expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance}))
        .toEqual(balance);
    })
  
    describe('then re-initializes app', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer(undefined, {})).toEqual(balance)
      })
    })
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