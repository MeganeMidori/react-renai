import React from 'react'
import { shallow } from 'enzyme'
import Scene from './Scene'

// renders backgrounds, characters, text, and questions for a given page in game state
test('', () => {
  const gameState = {
    page: 2
  }
  const script = []
  const scene = shallow(<Scene script={script} gameState={gameState} />)

  expect(scene.find('div').exists()).toBe(true);
  // expect(menu.find('button').length).toBe(2);
})
