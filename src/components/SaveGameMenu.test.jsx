import React from 'react'
import { shallow, mount } from 'enzyme'
import { SaveGameMenu } from './SaveGameMenu'

test('SaveGameMenu saves game state to the selected save slot in localstorage', () => {
  const setState = jest.fn()
  const gameState = {
    setState,
    previousComponentKey: 'fooComponent',
    componentKey: 'saveGameMenu',
    foo: 'bar',
    page: 5
  }
  jest.spyOn(window.localStorage.__proto__, 'setItem')
  const setItem = jest.fn()
  window.localStorage.__proto__.setItem = setItem

  const saveGameMenu = shallow(<SaveGameMenu gameState={gameState} />)
  saveGameMenu
    .find('button[value="2"]')
    .simulate('click', { target: { value: '2' } })

  expect(setState).toHaveBeenCalledTimes(0)
  expect(setItem).toHaveBeenCalledTimes(1)
  const saveState = {
    componentKey: 'fooComponent',
    foo: 'bar',
    page: 5
  }
  const saveStateString = JSON.stringify(saveState)
  expect(setItem).toHaveBeenCalledWith('save-2', saveStateString)

  jest.clearAllMocks()
})

test('SaveGameMenu displays success message when save is called', () => {
  const setState = jest.fn()
  const gameState = {
    setState,
    previousComponentKey: 'fooComponent',
    componentKey: 'saveGameMenu',
    foo: 'bar',
    page: 5
  }
  jest.spyOn(window.localStorage.__proto__, 'setItem')
  const setItem = jest.fn()
  window.localStorage.__proto__.setItem = setItem

  const saveGameMenu = mount(<SaveGameMenu gameState={gameState} />)

  expect(saveGameMenu.text()).not.toMatch(/Saved!/g)
  saveGameMenu
    .find('button[value="2"]')
    .simulate('click', { target: { value: '2' } })
  expect(saveGameMenu.text()).toMatch(/Saved!/g)

  jest.clearAllMocks()
})
