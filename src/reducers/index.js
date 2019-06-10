import { combineReducers } from 'redux';
import balance from './my-balance';
import bitcoin from './bitcoin';

export default combineReducers({ balance, bitcoin });