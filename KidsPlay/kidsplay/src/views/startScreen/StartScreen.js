import React from 'react';
import { StartScreenBody, StartButton, Icon } from './style';
import Clouds from '../../components/clouds/Clouds';
import RandomBalloons from '../../components/randomBalloons/RandomBalloons';

export default class StartScreen extends React.Component {
    render () {
        return (
            <StartScreenBody>
                <Clouds />
                <RandomBalloons />
                <StartButton>
                    <Icon className="material-icons">play_arrow</Icon>
                    Learn
                </StartButton>
            </StartScreenBody>
        )
    }
}