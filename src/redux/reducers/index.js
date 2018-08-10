import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import items from './shelfReducer';
import itemsCount from './itemCountReducer';

const store = combineReducers({
  user,
  login,
  items,
  itemsCount
});

export default store;
