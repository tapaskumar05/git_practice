import React from 'react';
import { StartScreenBody, StartButton } from './style';

export default class StartScreen extends React.Component {
    render () {
        return (
            <StartScreenBody>
                <StartButton>
                    Lets Learn
                </StartButton>
            </StartScreenBody>
        )
    }
}