import {
    REQUEST_COMPONENTDATA,
    RECEIVE_COMPONENTDATA,
    RECEIVE_COMPONENTDATA_ERROR
} from './constants/ActionTypes';

export function requestComponentData() {
    return {
        type: REQUEST_COMPONENTDATA,
    };
}

function receiveComponentData(json) {
    return {
        type: RECEIVE_COMPONENTDATA,
        userData: json,
    };
}

function receiveComponentDataErr(error) {
    return {
        type: RECEIVE_COMPONENTDATA_ERROR,
        error,
    };
}

export function fetchData() {
    return dispatch => {
        dispatch(requestComponentData());
        return fetch(`http://pb-api.herokuapp.com/bars`)
            .then(res => res.json())
            .then(json => dispatch(receiveComponentData(json)))
            .catch(err => dispatch(receiveComponentDataErr(err)));
    };
}


export function fetchComponentData() {
    return (dispatch, getState) => {
        return dispatch(fetchData());
    };
}
