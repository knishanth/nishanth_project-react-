import { combineReducers } from 'redux';
import {
    SELECT_USER,
    REQUEST_USERDATA,
    RECEIVE_USERDATA,
    RECEIVE_USERDATA_ERROR
} from './constants/ActionTypes';

export function currentUser(state = '', action) {
    switch (action.type) {
        case SELECT_USER:
            return action.user;
        default:
            return state;
    }
}

export function currentUserData(
    state = {
        isFetching: false,
        userData: {},
        user:''
    },
    action
) {
    switch (action.type) {
        case REQUEST_USERDATA:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_USERDATA:
            return Object.assign({}, state, {
                isFetching: false,
                userData: action.userData,
            });
        case RECEIVE_USERDATA_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                userData: action.error,
            });
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    currentUser,
    currentUserData
});

export default rootReducer;
