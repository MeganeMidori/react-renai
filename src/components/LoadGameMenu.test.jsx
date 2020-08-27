import React from 'react'
import { shallow } from 'enzyme'
import { LoadGameMenu } from './LoadGameMenu'
import Menu from './Menu'

test('LoadGameMenu loads the selected game state from localstorage', () => {
  const setState = jest.fn()
  const gameState = {
    setState
  }
  const localStorageGameStateJson = {
    history: ['foo', 'bar'],
    page: 5
  }
  // eslint-disable-next-line no-proto
  jest.spyOn(window.localStorage.__proto__, 'getItem')
  // eslint-disable-next-line no-proto
  window.localStorage.__proto__.getItem = jest
    .fn()
    .mockReturnValue(JSON.stringify(localStorageGameStateJson))

  const loadGameMenu = shallow(<LoadGameMenu gameState={gameState} />)
  loadGameMenu
    .find('button[value="2"]')
    .simulate('click', { target: { value: '2' } })

  expect(setState).toHaveBeenCalledTimes(2)
  expect(setState).toHaveBeenCalledWith('history', ['foo', 'bar'])
  expect(setState).toHaveBeenCalledWith('page', 5)

  jest.clearAllMocks()
})

test('LoadGameMenu catches the error when save state is empty', () => {
  const setState = jest.fn()
  const gameState = {
    setState
  }
  // eslint-disable-next-line no-proto
  jest.spyOn(window.localStorage.__proto__, 'getItem')
  // eslint-disable-next-line no-proto
  window.localStorage.__proto__.getItem = jest.fn()

  const loadGameMenu = shallow(<LoadGameMenu gameState={gameState} />)
  loadGameMenu
    .find('button[value="2"]')
    .simulate('click', { target: { value: '2' } })

  expect(setState).toHaveBeenCalledTimes(0)
  expect(loadGameMenu.find(Menu).exists()).toBe(true)

  jest.clearAllMocks()
})
