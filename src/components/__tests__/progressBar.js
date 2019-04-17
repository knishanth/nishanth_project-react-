import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import expect from 'expect';
import {ProgressBar} from '../progressBar';

describe('<ProgressBar />', () => {
  it('calls render', () => {
  const index=0;
  const data=10;
  const limit=100;
    const wrapper = mount(<ProgressBar key={0} data={"10"} limit={"100"}/>);
    expect(wrapper).toBeDefined();
  });
})