import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/app.scss'

import Wrapper from './components/Wrapper';
import PictureBox from './components/PictureBox';
import List from './components/List';
import Numbers from './components/Numbers';
import Box from './components/Box';

ReactDOM.render(
  <div>
    <Box
      boxClass='wrapper'
      header='This is an advertisement'
      paragraph='There are wonderful things here.'
    />
    <PictureBox
      header='These are peaceful and nice.'/>
    <List
      header='Details:'/>
    <Numbers />
  </div>,
  document.getElementById('app')
);
