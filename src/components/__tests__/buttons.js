import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const Button=require('../components/buttons');

describe('<Button />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<Button />);
    expect(wrapper).toBeDefined();
  });
  
  it('calls componentDidMount2', () => {
    const wrapper = mount(<Button />);
    expect(wrapper).toBeDefined();
  });
});