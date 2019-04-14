import React from 'react';
import Balloon from '../balloon/Balloon';
import { random } from '../../utils/utilsFunctions';
import { colors, alphanumeric } from '../../utils/utilsConstants';

export default () => {
    const balloons = [];
    for (let i=0; i<6; i++) {
        const color = random(colors);
        const alphanumber = random(alphanumeric);
        balloons.push(<Balloon color={color}>{alphanumber}</Balloon>);
    }
    return (
        <div> { balloons } </div>
    );
};
