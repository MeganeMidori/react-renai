/*
https://charat.me/en/genesis/create/

body: 0001
nose: 0004
eyes: 0001
iris: 0007
eyebrows: 0007
mouth: 0082
cheeks: 0002
bangs: 0110
ahoge: 0009
hair: 0036
shirt: 0052
skirt: 0027
sleeves: 0002
socks: 0011
shoes: 0002
hat: 0013
*/
import React from 'react';
// import '../index.css'
import {Character} from 'react-renai';

const sprite = (emotion) => <div className='charatme-container'><img src={`images/kimura/${emotion}.png`} alt={`${emotion} kimura`} /></div>

const Kimura = (props) => {
  const emotions = [
    {
      emotion: 'neutral',
      sprite: sprite('neutral')
    },
    {
      emotion: 'happy',
      sprite: sprite('happy')
    },
    {
      emotion: 'angry',
      sprite: sprite('angry')
    },
    {
      emotion: 'cringe',
      sprite: sprite('cringe')
    },
    {
      emotion: 'embarrassed',
      sprite: sprite('embarrassed')
    },
    {
      emotion: 'excited',
      sprite: sprite('excited')
    },
    {
      emotion: 'hungry',
      sprite: sprite('hungry')
    },
    {
      emotion: 'sad',
      sprite: sprite('sad')
    },
    {
      emotion: 'scared',
      sprite: sprite('scared')
    },
    {
      emotion: 'shy',
      sprite: sprite('shy')
    },
    {
      emotion: 'sleepy',
      sprite: sprite('sleepy')
    },
    {
      emotion: 'surprised',
      sprite: sprite('surprised')
    },
    {
      emotion: 'winded',
      sprite: sprite('winded')
    },
  ]
  return (<Character emotions={emotions} {...props} />)
}

export default Kimura;