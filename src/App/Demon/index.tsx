import React from 'react';
import './index.css';
import { random, WIDTH, HEIGHT } from '../../settings/constants';


const Demon = () => {
    return(
        <div
            style={
                {   
                    position:'absolute',
                    bottom: 40 * random(WIDTH),
                    left: 40 * random(HEIGHT-2),
                    width: 80,
                    height: 80,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '0px -5px',
                    backgroundImage: 'url(./assets/demon.png)',
                    animation:'big-demon-animation 1s steps(4) infinite',
                }
            }
        />
    );
}

export default Demon;