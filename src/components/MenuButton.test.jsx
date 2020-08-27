import React from 'react'
import { shallow } from 'enzyme'
import { MenuButton } from './MenuButton'

test('MenuButton renders a button with text', () => {
  const setState = jest.fn()
  const gameState = {
    setState,
    componentKey: 'foo'
  }
  const menuButton = shallow(
    <MenuButton toComponent='bar' gameState={gameState}>
      Link
    </MenuButton>
  )

  expect(menuButton.find('button').length).toBe(1)
  expect(menuButton.find('button').text()).toBe('Link')
})

test('MenuButton calls navigation methods on click', () => {
  const setState = jest.fn()
  const gameState = {
    setState,
    componentKey: 'foo'
  }
  const menuButton = shallow(
    <MenuButton toComponent='bar' gameState={gameState}>
      Link
    </MenuButton>
  )
  menuButton.simulate('click')

  expect(setState).toHaveBeenCalledTimes(2)
  expect(setState).toHaveBeenCalledWith('previousComponentKey', 'foo')
  expect(setState).toHaveBeenCalledWith('componentKey', 'bar')
})

test('MenuButton calls custom onclick in addition to navigation methods', () => {
  const setState = jest.fn()
  const gameState = {
    setState,
    componentKey: 'foo'
  }
  const customClick = jest.fn()
  const menuButton = shallow(
    <MenuButton toComponent='bar' gameState={gameState} onClick={customClick}>
      Link
    </MenuButton>
  )
  menuButton.simulate('click')

  expect(customClick).toHaveBeenCalledTimes(1)
  expect(setState).toHaveBeenCalledTimes(2)
  expect(setState).toHaveBeenCalledWith('previousComponentKey', 'foo')
  expect(setState).toHaveBeenCalledWith('componentKey', 'bar')
})
