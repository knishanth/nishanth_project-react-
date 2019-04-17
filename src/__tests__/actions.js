import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    it('Should swith a boolean to let us know fetching started', () => {
        const expectedAction = {
            type: types.REQUEST_COMPONENTDATA,
        };
        expect(actions.requestComponentData()).toEqual(expectedAction);
    });
});

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    const mockResult = { login: 'aderaaij' };
    const user = 'aderaaij';

    it('creates RECEIVE_USERDATA when fetching is done', () => {
        fetchMock.get(`http://pb-api.herokuapp.com/bars`, mockResult);
        const expectedActions = [
            { type: types.REQUEST_COMPONENTDATA },
            {
                type: types.RECEIVE_COMPONENTDATA,
                userData: mockResult,
            },
        ];

        const store = mockStore({ userData: {} });

        return store.dispatch(actions.fetchComponentData()).then(data => {
            const dispatchedActions = store.getActions();
            expect(dispatchedActions).toEqual(expectedActions);
        });
    });
});
