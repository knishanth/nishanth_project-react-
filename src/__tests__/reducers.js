import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as types from '../constants/ActionTypes';
import rootReducer, {
    currentUser,
    currentUserData,
    userRepos,
} from '../reducers';

describe('reducer tests', () => {
    it('should set the initial state', () => {
        expect(
            currentUser('', {
                type: types.SELECT_USER,
            })
        ).toEqual();
    });

    it('should handle adding a user', () => {
        const user = 'aderaaij';
        expect(
            currentUser('', {
                type: types.SELECT_USER,
                user,
            })
        ).toEqual(user);
    });

    it('should handle current userData', () => {
        expect(
            currentUserData(
                {},
                {
                    type: types.REQUEST_USERDATA,
                    isFetching: true,
                }
            )
        ).toEqual({ isFetching: true });

        expect(
            currentUserData(
                {},
                {
                    type: types.RECEIVE_USERDATA,
                    isFetching: false,
                }
            )
        ).toEqual({ isFetching: false, userData: undefined });

        expect(
            currentUserData(
                {},
                {
                    type: types.RECEIVE_USERDATA_ERROR,
                    isFetching: false,
                }
            )
        ).toEqual({ isFetching: false, userData: undefined });
    });
});
