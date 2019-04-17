import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as types from '../constants/ActionTypes';
import rootReducer, {
    currentUserData
} from '../reducers';

describe('reducer tests', () => {
     it('should handle current userData', () => {
        expect(
            currentUserData(
                {},
                {
                    type: types.REQUEST_COMPONENTDATA,
                    isFetching: true,
                }
            )
        ).toEqual({ isFetching: true });

        expect(
            currentUserData(
                {},
                {
                    type: types.RECEIVE_COMPONENTDATA,
                    isFetching: false,
                }
            )
        ).toEqual({ isFetching: false, userData: undefined });

        expect(
            currentUserData(
                {},
                {
                    type: types.RECEIVE_COMPONENTDATA_ERROR,
                    isFetching: false,
                }
            )
        ).toEqual({ isFetching: false, userData: undefined });
    });
});
