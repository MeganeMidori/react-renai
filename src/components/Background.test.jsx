import React from 'react'
import { shallow } from 'enzyme'
import Background from './Background'

test('Background renders without classes when no special props are present', () => {
  const background = shallow(<Background />)

  expect(background.find('.background__contain').exists()).toBe(false)
  expect(background.find('.background__cover').exists()).toBe(false)
})

test('Background renders with contain class when contain prop is present', () => {
  const background = shallow(<Background contain />)

  expect(background.find('.background__contain').exists()).toBe(true)
  expect(background.find('.background__cover').exists()).toBe(false)
})

test('Background renders with cover class when cover prop is present', () => {
  const background = shallow(<Background cover />)

  expect(background.find('.background__contain').exists()).toBe(false)
  expect(background.find('.background__cover').exists()).toBe(true)
})
