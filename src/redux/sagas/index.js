import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import viewShelfSaga from './viewShelfSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    viewShelfSaga()
    // watchIncrementAsync()
  ]);
}
