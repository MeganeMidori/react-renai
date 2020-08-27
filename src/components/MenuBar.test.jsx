import React from 'react'
import { shallow } from 'enzyme'
import MenuBar from './MenuBar'

test('MenuBar renders with menu hidden', () => {
  const menuBar = shallow(
    <MenuBar>
      <button className='menuButton' />
      <button className='menuButton' />
      <button className='menuButton' />
    </MenuBar>
  )

  expect(menuBar.find('.menuButton').exists()).toBe(false)
})

test('MenuBar renders menu overlay when menu button is clicked', () => {
  const menuBar = shallow(
    <MenuBar>
      <button className='menuButton' />
      <button className='menuButton' />
      <button className='menuButton' />
    </MenuBar>
  )

  menuBar.find('.menu-bar-container button').simulate('click')

  expect(menuBar.find('.menuButton').length).toBe(3)
})

test('MenuBar hides menu overlay when close menu button is clicked', () => {
  const menuBar = shallow(
    <MenuBar>
      <button className='menuButton' />
      <button className='menuButton' />
      <button className='menuButton' />
    </MenuBar>
  )

  menuBar.find('.menu-bar-container button').simulate('click')
  menuBar.find('.overlay-menu-container--button-close').simulate('click')

  expect(menuBar.find('.menuButton').exists()).toBe(false)
})
