import React from 'react';

import { StartScreenBody, StartButton, Icon } from './style';
import Clouds from '../../components/clouds/Clouds';
import RandomBalloons from '../../components/randomBalloons/RandomBalloons';

export default function StartScreen({history}) {
    return (
        <StartScreenBody>
            <Clouds />
            <RandomBalloons />
            <StartButton 
                onClick = {() => history.push('/menu')}
            >
                <Icon className="material-icons">play_arrow</Icon>
                Learn
            </StartButton>
        </StartScreenBody>
    )
}