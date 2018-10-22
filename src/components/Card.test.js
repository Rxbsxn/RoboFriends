import Card from './Card';
import { shallow, mount, render } from 'enzyme';
import React from 'react';

it('expect to render component', () => {
  expect(shallow(<Card />).length).toEqual(1);
})
