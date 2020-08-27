import styles from '../styles.module.css'
import React from 'react'

const Background = ({ url, color, contain, cover }) => (
  <div
    style={{ backgroundImage: `url('${url}')`, backgroundColor: color }}
    className={`${styles.background} ${
      contain ? styles.background__contain : ''
    } ${cover ? styles.background__cover : ''}`}
  />
)

export default Background
