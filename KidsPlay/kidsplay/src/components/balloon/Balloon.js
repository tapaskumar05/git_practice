import React from 'react';
import { Balloon, BalloonRef, TopC, LeftC } from './style';

export default (props) => {
    let baloonColor;
    if (props) {
        baloonColor = props.color ? props.color : 'red';
    }
    return (
        <Balloon color={baloonColor}>
            <BalloonRef />
            <TopC />
            <LeftC />
        </Balloon>
    )
};
