import React from 'react';
import { ColorBody } from './style';
import MultiColorText from '../../components/multiColorText/MultiColorText';
import Colors from '../../components/colors/Colors';

export default class Color extends React.Component {
    render () {
        return (
            <ColorBody>
                <MultiColorText>
                    COLORS
                </MultiColorText>
                <Colors />
            </ColorBody>
        )
    }
}