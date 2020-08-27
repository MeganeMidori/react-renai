import React from 'react';
import {Character} from 'react-renai';

const sprite = (emotion) => <div className='charatme-container'><img src={`images/sue/${emotion}.png`} alt={`${emotion} sue`} /></div>

const Sue = (props) => {
  const emotions = [
    {
      emotion: 'neutral',
      sprite: sprite('neutral')
    },
  ]
  return (<Character emotions={emotions} {...props} />)
}

export default Sue;