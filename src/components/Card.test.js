import Card from './Card';
import { shallow } from 'enzyme';
import React from 'react';

it('expect to render component', () => {
  expect(shallow(<Card />)).toMatchSnapshot()
})

//shallow - headless
//mount - normal
