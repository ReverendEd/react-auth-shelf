import { takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import {ITEM_ACTION} from '../actions/addItemActions';





function* addItemSaga() {
    console.log(ITEM_ACTION.ADD_ITEM);
    
    try {
        yield takeEvery(ITEM_ACTION.ADD_ITEM, addItem)
    } catch (error) {
        console.log(error);
        
    }
}

function* addItem(action){
    console.log(action);
    
    try {

        yield call(axios.post, '/api/shelf', action.payload)
        yield alert('your item has been created')

    } catch (error) {
        console.log(error);
    }
}

export default addItemSaga;