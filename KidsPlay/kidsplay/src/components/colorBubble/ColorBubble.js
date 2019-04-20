import React from 'react';
import { Bubble } from './style';

export default (props) => {
    const { color } = props;
    return <Bubble color={color} />
};
