import React from 'react';
import {Character} from 'react-renai';

const sprite = (emotion) => <div className='charatme-container'><img src={`images/yamashita/${emotion}.png`} alt={`${emotion} yamashita`} style={{height: '300px',objectFit: 'contain',}} /></div>

const Yamashita = (props) => {
  const emotions = [
    {
      emotion: 'neutral',
      sprite: sprite('neutral')
    },
  ]
  return (<Character emotions={emotions} {...props} />)
}

export default Yamashita;