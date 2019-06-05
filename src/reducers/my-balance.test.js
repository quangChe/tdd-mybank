import balanceReducer from './my-balance';
import * as constants from '../actions/constants';

describe('Balance reducer', () => {
  it('sets a balance', () => {
    const balance = 10;

    expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance}))
      .toEqual(balance);
  })
})