import { SHELF_ACTIONS } from '../actions/shelfActions';
import { put, takeLatest } from 'redux-saga/effects';
import { countItems } from '../requests/shelfRequests';


function* fetchCountSaga () {
    yield takeLatest(SHELF_ACTIONS.USER_ITEMS_COUNT , fetchCount);
}

function* fetchCount() {
    try {
        const itemsCount = yield countItems();
        console.log(itemsCount);
        
        yield put({
            type: SHELF_ACTIONS.SET_ITEMS_COUNT,
            payload: itemsCount
        })
    } catch (error) {
        console.log(error, 'error in fetch')
    }
}



export default fetchCountSaga;