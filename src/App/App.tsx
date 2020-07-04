import React from 'react';
import './App.css';

import { GAME_SIZE } from '../settings/constants';

import Board from './Board';
import MiniDemon from './MiniDemon';
import Hero from './Hero';
import Demon from './Demon';
import Trap from './Trap';
import Chest from './Chest';

const start = false;
function App() {
  return (
    <div className="App">

      <div 
        style={{
          position: 'relative',
          width: GAME_SIZE,
          height: GAME_SIZE,
        }}>
        <Board />
        <Hero/>
        <Demon/>
        <MiniDemon/>
        <Trap/>
        <Chest/>
        <Demon/>
        <MiniDemon/>
        <Trap/>
        <Chest/>
        
      </div>
      
    </div>
  );
}

export default App;
