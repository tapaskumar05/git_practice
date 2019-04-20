import React from 'react';

import { StartScreenBody, StartButton, Icon } from './style';
import Clouds from '../../components/clouds/Clouds';
import RandomBalloons from '../../components/randomBalloons/RandomBalloons';

export default class StartScreen extends React.Component {
    render () {
        return (
            <StartScreenBody className="route-holder">
                <Clouds />
                <RandomBalloons />
                <StartButton to="/menu">
                    <Icon className="material-icons">play_arrow</Icon>
                    Learn
                </StartButton>
            </StartScreenBody>
        )
    }
}