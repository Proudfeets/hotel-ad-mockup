import React from 'react';
import PictureBox from './PictureBox'
import Numbers from './Numbers'

const Wrapper = props => {
  return (
    <div className='box wrapper'>
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
      <Numbers />
      <PictureBox />
    </div>
  )
}

export default Wrapper;
