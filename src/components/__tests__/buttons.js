import React from 'react';
import { mount,shallow } from 'enzyme';
import expect from 'expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import {Button} from '../button';


describe('<Button />', () => {
  it('calls render', () => {
    const mockLoginfn = jest.fn();
	const value="-30";
    const wrapper = shallow(<Button  value={value} handleSubmit={mockLoginfn}/>);
    expect(wrapper).toBeDefined();
  });
  
  it('find input', () => {
    const mockLoginfn = jest.fn();
	const value="-30";
    const wrapper = shallow(<Button  value={value} handleSubmit={mockLoginfn}/>);
	wrapper.find('input').simulate('click',{ target: {value:('2018-01-22')} });
    expect(wrapper.find('input').length).toBe(1);
  });
  
  it('testing prop value', () => {
    const mockLoginfn = jest.fn();
	const value="-30";
    const wrapper = shallow(<Button  value={value} handleSubmit={mockLoginfn}/>);
	expect(wrapper.props().value).toBe(value);
  });
  
  
})