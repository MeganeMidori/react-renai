import styles from '../styles.module.css'
import React from 'react'
import Background from './Background'

const Menu = ({ children, ...props }) => {
  return (
    <div className={styles['menu-container']} {...props}>
      <Background url='https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-046.jpg' />
      <div className={`menuItems ${styles.menuItems}`}>{children}</div>
    </div>
  )
}

export default Menu
