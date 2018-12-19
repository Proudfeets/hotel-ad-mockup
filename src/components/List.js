import React from 'react';

const List = props => {
  return (
    <div className='box list'>
      <h1>{props.header}</h1>
      <ul>
        <li>Five-star Chef</li>
        <li>Horseback Riding Lessons</li>
        <li>Private Beach</li>
        <li>Complimentary Breakfast</li>
        <li>On Site Spa</li>
      </ul>
    </div>
  )
}

export default List;
