import React from 'react'
import { mount } from 'enzyme'
import { connectGameState } from './gameStateContext'

test('connectGameState returns the given component with game state in props', () => {
  const DumbComponent = (props) => (
    <div className='foo'>
      <p>component</p>
    </div>
  )
  const Component = connectGameState(DumbComponent)
  const component = mount(<Component foo='bar' />)

  expect(component.find('.foo').exists()).toBe(true)
  expect(component.find('p').exists()).toBe(true)
  expect(component.props().foo).toBe('bar')
})

test('connectGameState returns the given component with game state in props with children', () => {
  const DumbComponent = (props) => <div className='foo'>{props.children}</div>
  const DumbChildComponent = (props) => <p>component</p>
  const Component = connectGameState(DumbComponent)
  const component = mount(
    <Component foo='bar'>
      <DumbChildComponent />
    </Component>
  )

  expect(component.find('.foo').exists()).toBe(true)
  expect(component.find('p').exists()).toBe(true)
  expect(component.props().foo).toBe('bar')
})
