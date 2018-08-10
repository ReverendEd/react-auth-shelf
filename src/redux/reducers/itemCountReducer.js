import { combineReducers } from 'redux';
import { SHELF_ACTIONS } from '../actions/shelfActions';

const itemCount = (state = [], action) => {
    console.log(action);
    
    switch (action.type) {
        case SHELF_ACTIONS.SET_ITEMS_COUNT:        
            return action.payload || state;
        //   case SHELF_ACTIONS.UNSET_USER:
        //     return null;
        default:
            return state;
    }
};


export default combineReducers({
    itemCount
});