import styles from '../styles.module.css'
import React from 'react'

const Answers = ({
  variable,
  history,
  type,
  choices,
  gameState,
  updateState,
  navigateTo
}) => {
  const submitAnswer = (e) => {
    e.preventDefault()
    updateState()
    gameState.setState('history', history)
    if (
      choices &&
      choices.filter((choice) => choice.value === e.target.value)[0].saveGame
    ) {
      console.log(e.target.value)
      console.log(choices.filter((choice) => choice.value === e.target.value))
      console.log(choices.filter((choice) => choice.value === e.target.value)[0])
      console.log(gameState)
      gameState.setState('previousComponentKey', gameState.componentKey)
      gameState.setState('componentKey', 'saveGameMenu')
      return
    }
    if (
      choices &&
      choices.filter((choice) => choice.value === e.target.value)[0].navigate
    ) {
      gameState.setState('componentKey', e.target.value)
      gameState.setState('page', 0)
      gameState.setState('previousComponentKey', undefined)
      return
    }
    gameState.setState(variable, e.target.value || e.target[0].value)
    gameState.setState('page', gameState.page + 1)
  }

  return (
    <div className={styles['answers-container']}>
      {type === 'input' && (
        <form onSubmit={submitAnswer}>
          <input />
        </form>
      )}
      {type === 'select' &&
        choices.map((choice) => {
          return (
            <button
              value={choice.value}
              onClick={submitAnswer}
              key={choice.value}
            >
              {choice.name}
            </button>
          )
        })}
    </div>
  )
}

export default Answers
