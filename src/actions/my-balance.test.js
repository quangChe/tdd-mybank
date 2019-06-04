import * as constants from './constants';
import * as actions from './my-balance';

describe('My Balance Action Creators', () => {
  it('creates an action to set the balance', () => {
    const balance = 0;
    const expectedAction = {type: constants.SET_BALANCE, balance };
    expect(actions.setBalance(balance)).toEqual(expectedAction);
  })
})