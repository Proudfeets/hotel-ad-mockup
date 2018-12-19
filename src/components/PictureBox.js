import React from 'react';
import Picture from './Picture'
import List from './List'

const PictureBox = props => {
  return (
    <div className='box picture'>
      <h1>{props.header}</h1>
      <Picture />
      <List />
    </div>
  )
}

export default PictureBox;
