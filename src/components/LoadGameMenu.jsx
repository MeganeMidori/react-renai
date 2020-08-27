import React from 'react'
import Menu from './Menu'
import MenuButton from './MenuButton'
import { connectGameState } from './gameStateContext'

export const LoadGameMenu = ({ children, gameState }) => {
  const load = (e) => {
    try {
      const saveString = localStorage.getItem(`save-${e.target.value}`)
      const saveState = JSON.parse(saveString)
      Object.entries(saveState).map(([key, value]) =>
        gameState.setState(key, value)
      )
    } catch {
      console.error('save state corrupted')
    }
  }
console.log(children)
  return (
    <Menu>
      {children}
      <button onClick={load} value='1'>
        Save 1
      </button>
      <button onClick={load} value='2'>
        Save 2
      </button>
      <button onClick={load} value='3'>
        Save 3
      </button>
      <button onClick={load} value='4'>
        Save 4
      </button>
      <MenuButton toComponent={gameState.previousComponentKey}>Back</MenuButton>
    </Menu>
  )
}

export default connectGameState(LoadGameMenu)
