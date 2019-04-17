import { combineReducers } from 'redux';
import {
    REQUEST_COMPONENTDATA,
    RECEIVE_COMPONENTDATA,
    RECEIVE_COMPONENTDATA_ERROR
} from './constants/ActionTypes';


export function currentUserData(
    state = {
        isFetching: false,
        userData: {},
    },
    action
) {
    switch (action.type) {
        case REQUEST_COMPONENTDATA:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_COMPONENTDATA:
            return Object.assign({}, state, {
                isFetching: false,
                userData: action.userData,
            });
        case RECEIVE_COMPONENTDATA_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                userData: action.error,
            });
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    currentUserData
});

export default rootReducer;
