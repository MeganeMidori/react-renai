import React from 'react'
import { shallow } from 'enzyme'
import Menu from './Menu'

test('Menu renders the menu items passed in as children', () => {
  const menu = shallow(
    <Menu>
      <button />
      <button />
    </Menu>
  )

  expect(menu.find('button').length).toBe(2)
})
