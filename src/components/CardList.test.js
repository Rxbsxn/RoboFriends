import CardList from './Card';
import { shallow } from 'enzyme';
import React from 'react';

it('expect to render component', () => {
  const mockRobots = [{
    id: 1,
    name: 'Adam Nowak',
    userName: 'nowak',
    email: 'adam@nowak.com'
  }]
  expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot()
})

//shallow - headless
//mount - normal
