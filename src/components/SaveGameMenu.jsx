import React, { useState } from 'react'
import { connectGameState } from './gameStateContext'
import Menu from './Menu'
import MenuButton from './MenuButton'

export const SaveGameMenu = ({ children, gameState }) => {
  const [successMessage, setSuccessMessage] = useState('')
console.log(gameState)
  const save = (e) => {
    const saveState = {
      ...gameState,
      componentKey: gameState.previousComponentKey,
      previousComponentKey: undefined,
      children: undefined,
      setState: undefined
    }
    const saveStateString = JSON.stringify(saveState)
    localStorage.setItem(`save-${e.target.value}`, saveStateString)
    setSuccessMessage('Saved!')
  }

  return (
    <Menu>
      {children}
      {successMessage}
      <button onClick={save} value='1'>
        Save 1
      </button>
      <button onClick={save} value='2'>
        Save 2
      </button>
      <button onClick={save} value='3'>
        Save 3
      </button>
      <button onClick={save} value='4'>
        Save 4
      </button>
      <MenuButton toComponent={gameState.previousComponentKey}>Back</MenuButton>
    </Menu>
  )
}

export default connectGameState(SaveGameMenu)
