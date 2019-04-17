import React from 'react';
import { mount,shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

import expect from 'expect';
import AppContainer from '../App'


describe('App', () => {
let wrapper, store, dispatch=jest.fn();
    it('Initial state of the app', () => {
	const initialState = {
            currentUserData:{isFetching: true}
        };
        store = mockStore(initialState);
        // Shallow render the container passing in the mock store
        wrapper = shallow(
            <AppContainer store={store}/>
        );
        // test that the state values were correctly passed as props
        expect(wrapper.props().currentUserData.isFetching).toBe(true);
    });
	
	it('updated state of the app', () => {
	const initialState = {
            currentUserData:{isFetching: false,userData:{}}
        };
        store = mockStore(initialState);
        // Shallow render the container passing in the mock store
        wrapper = shallow(
            <AppContainer store={store}/>
        );
		
		wrapper.instance().componentWillReceiveProps({currentUserData:{isFetching:false,userData:{"buttons":[35,19,-21,-36],"bars":[21,80,46,25],"limit":130}}});
        // test that the state values were correctly passed as props
		//console.log(wrapper.html());
		wrapper.setState({'progressBarData':[21,80,46,25]});
		wrapper.update();
		//console.log(wrapper.html());
        expect(wrapper.props().currentUserData.isFetching).toBe(false);
    });


});