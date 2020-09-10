import styles from '../styles.module.css'
import React from 'react'
import { Flipped } from 'react-flip-toolkit'

const Character = ({ emotions, emotion, id, ...props }) => {
  const defaultEmotion = emotions[0]
  const sprite = emotion
    ? emotions.filter((emo) => emo.emotion === emotion)[0].sprite
    : defaultEmotion.sprite

  return (
    <Flipped flipId={id} {...props}>
      <div className={styles.character}>{sprite}</div>
    </Flipped>
  )
}

export default Character
