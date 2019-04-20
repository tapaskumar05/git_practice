import React from 'react';
import { randomColor } from '../../utils/utilsFunctions';
import { ColorText } from './style';

export default (props) => {
    const text = props.children || '';
    const textArr = text.split('');
    const multiColorText = textArr.map((alphabet, i) => {
        const color = randomColor();
        return <ColorText color={color} key={i}>{alphabet}</ColorText>;
    });
    return <div>{ multiColorText }</div>;
};
