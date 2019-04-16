import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import Button from '../components/buttons';


describe('<Button />', () => {
  it('calls render', () => {
    const wrapper = mount(<Button />);
    expect(wrapper).toBeNull();
  });
})