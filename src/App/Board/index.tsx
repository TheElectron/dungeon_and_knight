import React from 'react';
import { GAME_SIZE } from '../../settings/constants';

const Board = () => {
    return(
        <div>
            <img src="./assets/tileset.gif" alt="Board" width={GAME_SIZE} height={GAME_SIZE}/>
        </div>
    );
}

export default Board;