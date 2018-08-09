import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import items from './shelfReducer';

const store = combineReducers({
  user,
  login,
  items
});

export default store;
