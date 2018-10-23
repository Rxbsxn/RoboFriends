import MainPage from './MainPage';
import { shallow } from 'enzyme';
import React from 'react';

it('expect to render MainPage component', () => {
  const mockStore = {
    robots: [],
    searchField: ''
  }
  expect(shallow(<MainPage store={mockStore}/>)).toMatchSnapshot()
})
