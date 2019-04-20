import React from 'react';
import { TabContainer, TabButton, TabTextStyle } from './style';
import { randomColorWithOpacity } from '../../utils/utilsFunctions';
import Landscape from '../../svgImages/landscape/Landscape';

const Menu = () => {
    const tabs = [
        {
            key: 'characters',
            text: 'A-Z',
            route: '/characters'
        },
        {
            key: 'numbers',
            text: '1-9',
            route: '/numbers'
        },
        {
            key: 'color',
            text: 'Colors',
            route: '/color'
        }
    ];

    const tabsHtml = tabs.map(tab => {
        const { color, colorWithOpacity } = randomColorWithOpacity();
        return (
            <TabButton
                key={tab.key}
                color = {color}
                colorWithOpacity = {colorWithOpacity}
            >
                <TabTextStyle color={color}>{tab.text}</TabTextStyle>
            </TabButton>
        )
    });

    return (
        <TabContainer className="route-holder">
            <Landscape />
            {tabsHtml}
        </TabContainer>
    );
}

export default Menu;