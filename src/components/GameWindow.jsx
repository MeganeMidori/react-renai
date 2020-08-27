import styles from '../styles.module.css'
import React, { useState } from 'react'
import GameStateContext from './gameStateContext'
import LoadGameMenu from './LoadGameMenu'
import SaveGameMenu from './SaveGameMenu'

const GameWindow = (props) => {
  // ROUTING
  // finds the index component
  const indexComponent = React.Children.toArray(props.children).filter(
    (child) => child.props.index === true
  )[0].props.componentKey

  // CONTEXT
  // defines the default game state
  const defaultState = {
    page: 0,
    componentKey: indexComponent,
    history: []
  }

  // CONTEXT
  // keeps track of game state
  const [state, setGameState] = useState(defaultState)

  // CONTEXT
  // keeps track of interim state
  let interimState = state

  // CONTEXT
  // defines the setState method for setting game state
  const setState = (key, value) => {
    interimState = { ...interimState, [key]: value }
    setGameState(interimState)
  }

  // CONTEXT
  // defines the method for resetting the game state
  const resetState = () => {
    interimState = defaultState
    setGameState(defaultState)
  }

  // ROUTING
  // defines default components
  // not sure if I like this design actually
  const defaultComponents = [
    <LoadGameMenu componentKey='loadGameMenu' />,
    <SaveGameMenu componentKey='saveGameMenu' />
  ]

  // ROUTING
  const components = [
    ...React.Children.toArray(props.children),
    ...defaultComponents
  ]

  // ROUTING
  const component = components.find(
    (comp) => comp.props.componentKey === state.componentKey
  )

  // connects children to the context and returns selected component
  return (
    <GameStateContext.Provider value={{ ...state, setState, resetState }}>
      <div className={styles['game-window--container']}>{component}</div>
    </GameStateContext.Provider>
  )
}

export default GameWindow
