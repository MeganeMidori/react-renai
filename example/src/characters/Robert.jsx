import React from 'react';
import {Character} from 'react-renai';

const sprite = (emotion) => <div className='charatme-container'><img src={`images/robert/${emotion}.png`} alt={`${emotion} robert`} /></div>

const Robert = (props) => {
  const emotions = [
    {
      emotion: 'neutral',
      sprite: sprite('neutral')
    },
  ]
  return (<Character emotions={emotions} {...props} />)
}

export default Robert;