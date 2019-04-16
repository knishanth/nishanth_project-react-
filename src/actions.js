import {
    SELECT_USER,
    REQUEST_USERDATA,
    RECEIVE_USERDATA,
    RECEIVE_USERDATA_ERROR
} from './constants/ActionTypes';

export function selectUser(user) {
    return {
        type: SELECT_USER,
        user,
    };
}

export function requestUserData() {
    return {
        type: REQUEST_USERDATA,
    };
}

function receiveUserData(json) {
    return {
        type: RECEIVE_USERDATA,
        userData: json,
    };
}

function receiveUserDataErr(error) {
    return {
        type: RECEIVE_USERDATA_ERROR,
        error,
    };
}

export function fetchUserData(user) {
    return dispatch => {
        dispatch(requestUserData());
        return fetch(`http://pb-api.herokuapp.com/bars`)
            .then(res => res.json())
            .then(json => dispatch(receiveUserData(json)))
            .catch(err => dispatch(receiveUserDataErr(err)));
    };
}


export function fetchUserAndRepos(user) {
    return (dispatch, getState) => {
        return dispatch(fetchUserData(user));
    };
}
