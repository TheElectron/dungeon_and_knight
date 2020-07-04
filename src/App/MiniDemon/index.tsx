import React from 'react';
import './index.css';
import { random, WIDTH, HEIGHT } from '../../settings/constants';


const MiniDemon = () => {
    return(
        <div
            style={
                {   
                    position:'absolute',
                    bottom: 40 * random(WIDTH),
                    left: 40 * random(HEIGHT-2),
                    width: 40,
                    height: 50,
                    backgroundPosition: '0px -30px',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url(./assets/mini_demon.png)',
                    animation:'mini-demon-animation 1s steps(4) infinite',
                }
            }
        />
    );
}

export default MiniDemon;