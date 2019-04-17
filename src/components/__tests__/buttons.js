import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import {Button} from '../button';


describe('<Button />', () => {
  it('calls render', () => {
    const wrapper = mount(<Button />);
    expect(wrapper).toBeDefined();
  });
})