import React from 'react';
import Balloon from '../balloon/Balloon';
import { random, randomColor } from '../../utils/utilsFunctions';
import { alphanumeric } from '../../utils/utilsConstants';

export default () => {
    const balloons = [];
    for (let i=0; i<10; i++) {
        const color = randomColor();
        const alphanumber = random(alphanumeric);
        balloons.push(<Balloon color={color} key={i}>{alphanumber}</Balloon>);
    }
    return (
        <div> { balloons } </div>
    );
};
