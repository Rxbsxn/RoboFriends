import CounterButton from './CounterButton';
import { shallow } from 'enzyme';
import React from 'react';

it('expect to render CounterButton component', () => {
  const mockColor = 'red'
  expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot()
})

//shallow - headless
//mount - normal

it('correctly updates the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor}/>);

  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 1 });
  expect(wrapper.props().color).toEqual('red');
})
