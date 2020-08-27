import styles from '../styles.module.css'
import React, { useRef, useState, useEffect, useContext } from 'react'
import GameStateContext from './gameStateContext'

const Text = (props) => {
  const [pointer, setPointer] = useState(1)
  const [typing, setTyping] = useState(true)
  const textBoxRef = useRef()
  const text = props.children || ''
  const gameState = useContext(GameStateContext)
  const { page } = gameState

  useEffect(() => {
    let shadowPointer = 1
    setPointer(0)
    setTyping(true)

    const interval = setInterval(() => {
      if (shadowPointer > text.length) {
        setTyping(false)
        clearInterval(interval)
        return
      }

      shadowPointer++
      setPointer((pointer) => pointer + 1)
      textBoxRef.current.scrollTop = textBoxRef.current.scrollHeight
    }, 50)

    return () => clearInterval(interval)
  }, [text])

  const nextPage = () => {
    if (props.disabled) {
      return
    }

    if (typing) {
      setPointer(text.length)
      setTyping(false)
      return
    }

    props.updateState()
    gameState.setState('page', page + 1)
    gameState.setState('history', [...gameState.history, text])
    props.navigateTo()
  }

  const nextButtonUrl =
    props.nextButtonUrl ||
    'https://66.media.tumblr.com/tumblr_mb7af0lu0U1rfjowdo1_500.gif'

  return (
    <div
      className={styles['text-container']}
      style={{ backgroundImage: `url(${props.backgroundUrl})`, ...props.style }}
    >
      <div className={styles.text} id='text' ref={textBoxRef}>
        {text.slice(0, pointer)}
      </div>

      <div className={styles.nextButton}>
        <img
          src={nextButtonUrl}
          className={`next-button--img ${styles['nextButton--img']}`}
          onClick={nextPage}
          style={props.nextButtonStyle}
          alt='next button'
        />
      </div>
    </div>
  )
}

export default Text
