import React from 'react'
import { shallow } from 'enzyme'
import Answers from './Answers'

test('Answers renders text input when type is input', () => {
  const answers = shallow(<Answers variable='foo' history={[]} type='input' />)

  expect(answers.find('input').exists()).toBe(true)
})

test('Answers renders button list when type is input', () => {
  const answers = shallow(
    <Answers
      variable='foo'
      history={[]}
      type='select'
      choices={[
        { name: 'Bar 1', value: 'bar1' },
        { name: 'Bar 2', value: 'bar2' }
      ]}
    />
  )

  expect(answers.find('button').exists()).toBe(true)
  expect(answers.find('button').length).toBe(2)
})

test('Calls method on submit', () => {
  const setGameState = jest.fn()
  const gameState = {
    setState: setGameState,
    page: 2
  }
  const answers = shallow(
    <Answers
      variable='foo'
      history={[]}
      type='select'
      choices={[
        { name: 'Bar 1', value: 'bar1' },
        { name: 'Bar 2', value: 'bar2' }
      ]}
      gameState={gameState}
    />
  )

  answers
    .find('button')
    .first()
    .simulate('click', { preventDefault: () => {}, target: { value: 'bar1' } })

  expect(setGameState).toHaveBeenCalledTimes(3)
  expect(setGameState).toHaveBeenCalledWith('foo', 'bar1')
  expect(setGameState).toHaveBeenCalledWith('history', [])
  expect(setGameState).toHaveBeenCalledWith('page', 3)
})
