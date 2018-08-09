import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import addItemSaga from './addItemSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    addItemSaga()
    // watchIncrementAsync()
  ]);
}
