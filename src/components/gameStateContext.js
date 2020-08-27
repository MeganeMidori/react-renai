import React, { useContext, createContext } from 'react'

const GameStateContext = createContext({})

export const connectGameState = (component) => ({ children, ...props }) => {
  const gameState = useContext(GameStateContext)
  const Component = component

  return (
    <Component gameState={gameState} {...props}>
      {children}
    </Component>
  )
}

export default GameStateContext
