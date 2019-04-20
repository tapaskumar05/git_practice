import React from 'react';
import { basicColors } from '../../utils/utilsConstants';
import ColorBubble from '../colorBubble/ColorBubble';
import { BubbleContainer } from './style';

export default () => {
    return (
        <BubbleContainer>
            {
                basicColors.map(color => <ColorBubble color={color} />)
            }
        </BubbleContainer>
    )
};
