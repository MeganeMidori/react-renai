import React from 'react'
import { shallow } from 'enzyme'
import Character from './Character'

test('Character renders the first emotion in the list when no emotion is specified', () => {
  const emotions = [
    { emotion: 'neutral', sprite: <img src='neutral.jpg' alt='neutral' /> },
    {
      emotion: 'angy',
      sprite: <img src='no-talk-me.jpg' alt='neutral' />
    }
  ]
  const character = shallow(<Character id='foo' emotions={emotions} />)

  expect(character.find('img[src="neutral.jpg"]').exists()).toBe(true)
})

test('Character renders the selected emotion when emotion is specified', () => {
  const emotions = [
    { emotion: 'neutral', sprite: <img src='neutral.jpg' alt='neutral' /> },
    {
      emotion: 'angy',
      sprite: <img src='no-talk-me.jpg' alt='neutral' />
    }
  ]
  const character = shallow(
    <Character id='foo' emotions={emotions} emotion='angy' />
  )

  expect(character.find('img[src="no-talk-me.jpg"]').exists()).toBe(true)
})
