import React from 'react'
import { connectGameState } from './gameStateContext'

export const MenuButton = ({ children, onClick, toComponent, gameState }) => {
  const navigate = () => {
    onClick && onClick()
    gameState.setState('previousComponentKey', gameState.componentKey)
    gameState.setState('componentKey', toComponent)
  }

  return <button onClick={navigate}>{children}</button>
}

export default connectGameState(MenuButton)
