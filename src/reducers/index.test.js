import rootReducer from './index';

describe('Root Reducer', () => {
  it('initializes the default state', () => {
    expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} })
  })
})