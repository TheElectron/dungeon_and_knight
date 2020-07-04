import React from 'react';
import './index.css';
import { random, WIDTH, HEIGHT } from '../../settings/constants';


const Trap = () => {
    return(
        <div
            style={
                {   
                    position:'absolute',
                    bottom: 40 * random(WIDTH),
                    left: 40 * random(HEIGHT),
                    width: 40,
                    height: 40  ,
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url(./assets/trap.png)',
                    animation:'trap-animation 1s steps(8) infinite',
                }
            }
        />
    );
}

export default Trap;