import styles from '../styles.module.css'
import React from 'react'
import MenuButton from './MenuButton'
import { connectGameState } from './gameStateContext'

export const DialogueHistory = ({ gameState }) => {
  return (
    <div>
      {gameState.history.map((line, i) => (
        <div className={styles['dialogue-history--item']} key={i}>
          {line}
        </div>
      ))}
      <MenuButton toComponent={gameState.previousComponentKey}>Back</MenuButton>
    </div>
  )
}

export default connectGameState(DialogueHistory)
