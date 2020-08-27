import React from 'react'
import { shallow } from 'enzyme'
import { DialogueHistory } from './DialogueHistory'

test('DialogueHistory renders the dialogue history from game state', () => {
  const gameState = {
    history: ['line 1', 'line 2']
  }
  const dialogueHistory = shallow(<DialogueHistory gameState={gameState} />)

  expect(dialogueHistory.find('.dialogue-history--item').length).toBe(2)
})
