import styles from '../styles.module.css'
import React from 'react'
import Background from './Background'
import { Flipper } from 'react-flip-toolkit'
import { connectGameState } from './gameStateContext'
import Answers from './Answers'

const Scene = ({ gameState, textComponent, script, assets }) => {
  const TextComponent = textComponent
  const page = script[gameState.page] || {}
  const compressedPage = script
    .slice(0, gameState.page + 1)
    .reduce(
      (previousPages, nextPage) => ({ ...previousPages, ...nextPage }),
      {}
    )
  const history = [...gameState.history, page.text]
  const background =
    compressedPage.background &&
    compressedPage.background.map(
      (background) =>
        assets.filter((asset) => asset.props.assetId === background)[0]
    )
  const characters =
    compressedPage.characters &&
    compressedPage.characters.map(
      (character) =>
        assets.filter((asset) => asset.props.assetId === character)[0]
    )

  const finalPage = script[gameState.page + 1] === undefined

  const updateState = () => {
    if (page.state) {
      Object.entries(page.state).map(([key, value]) =>
        gameState.setState(key, value)
      )
    }
  }

  const navigateTo = () => {
    if (page.navigateTo) {
      gameState.setState('componentKey', page.navigateTo)
      gameState.setState('page', 0)
      gameState.setState('previousComponent', undefined)
    }
  }

  return (
    <Flipper flipKey={gameState.page}>
      <div className={styles['scene-container']}>
        <Background url='https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-046.jpg' />
        {background}
        {page.reply && (
          <Answers
            history={history}
            gameState={gameState}
            updateState={updateState}
            {...page.reply}
          />
        )}
        {characters}
        <TextComponent
          history={history}
          disabled={page.reply || finalPage}
          updateState={updateState}
          navigateTo={navigateTo}
        >
          {page.text}
        </TextComponent>
      </div>
    </Flipper>
  )
}

export default connectGameState(Scene)
