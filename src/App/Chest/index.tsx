import React from 'react';
import './index.css';
import { random, WIDTH, HEIGHT } from '../../settings/constants';

const Chest = () => {
    return(
        <div
            style={
                {   
                    position:'absolute',
                    bottom: 40 * random(WIDTH),
                    left: 40 * random(HEIGHT),
                    width: 40,
                    height: 40,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '0px -5px',
                    backgroundImage: 'url(./assets/chest.png)',
                    animation:'chest-animation 1s steps(3) infinite',
                }
            }
        />
    );
}

export default Chest;