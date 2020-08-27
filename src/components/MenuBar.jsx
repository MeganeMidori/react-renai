import styles from '../styles.module.css'
import React, { useState } from 'react'

const MenuBar = (props) => {
  const [showMenu, setShowMenu] = useState(false)

  if (showMenu) {
    return (
      <div
        className={`${styles['overlay-menu-container']} ${styles['menu-container']}`}
      >
        {props.children}
        <button
          className={styles['overlay-menu-container--button-close']}
          onClick={() => {
            setShowMenu(false)
          }}
        >
          close
        </button>
      </div>
    )
  }
  return (
    <div className={styles['menu-bar-container']}>
      <button
        onClick={() => {
          setShowMenu(true)
        }}
      >
        Menu
      </button>
    </div>
  )
}

export default MenuBar
