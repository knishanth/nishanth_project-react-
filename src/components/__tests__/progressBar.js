import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import expect from 'expect';
import {ProgressBar} from '../progressBar';

describe('<ProgressBar />', () => {
  const index=0;
  const data="10";
  const limit="100";
  
  it('calls render', () => {
    const wrapper = mount(<ProgressBar key={index} data={data} limit={limit}/>);
    expect(wrapper).toBeDefined();
  });
  
  it('content value', () => {
    const wrapper = mount(<ProgressBar key={index} data={data} limit={limit}/>);
    expect(wrapper.text()).toBe('10%');
  });
})