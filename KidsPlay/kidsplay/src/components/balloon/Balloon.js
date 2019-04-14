import React from 'react';
import { Balloon, BalloonRef, TopC, LeftC } from './style';
import { randomBetweenRange } from '../../utils/utilsFunctions';

export default (props) => {
    let color = 'red',
        text = '';
    if (props) {
        color = props.color && props.color;
        text = props.children || '';
    }
    const left = randomBetweenRange(0, 70);
    const propsToSend = {
        color,
        left
    };
    return (
        <Balloon {...propsToSend}>
            <BalloonRef />
            <TopC />
            <LeftC />
            {text}
        </Balloon>
    )
};
