import { SHELF_ACTIONS } from '../actions/shelfActions';
import { put, takeLatest } from 'redux-saga/effects';
import { callItems } from '../requests/shelfRequests';

function* viewShelfSaga() {    
    yield takeLatest(SHELF_ACTIONS.FETCH_ITEMS, fetchItems);
  }

function* fetchItems() {
    try {
        const items = yield callItems();
        yield put({
            type: SHELF_ACTIONS.SET_ITEMS,
            payload: items
          });
    } catch (error) {
        console.log(error, 'error in fetch')
    }
} 



export default viewShelfSaga;