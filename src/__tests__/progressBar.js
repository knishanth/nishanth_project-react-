import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import expect from 'expect';
import ProgressBar from '../components/progressBar';

describe('<ProgressBar />', () => {
  it('calls render', () => {
  const index=0;
  const data=10;
  const limit=100;
    const wrapper = mount(<ProgressBar key={index} data={data} limit={limit}/>);
    expect(wrapper).toBeDefined();
  });
})