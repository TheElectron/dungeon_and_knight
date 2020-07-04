import React from 'react';
import { useState } from 'react';
import './index.css';
import useEventListener from '@use-it/event-listener';

const initialPosition = {
    x: 2,
    y: 1,
};

const Hero = () => {
    const [positionState, updatePositionState] = useState();

    useEventListener('keydown', (event) =>{})

    return(
        <div
            style={
                {   
                    position:'absolute',
                    bottom: 40 * initialPosition.x,
                    left: 40 * initialPosition.y,
                    width: 40,
                    height: 50,
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url(./assets/hero.png)',
                    backgroundPosition: '0px -30px',
                    animation:'hero-animation 1s steps(4) infinite',
                }
            }
        />
    );
}

export default Hero;