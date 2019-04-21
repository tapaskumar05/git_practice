import React from 'react';
import { TabContainer, TabButton, TabTextStyle } from './style';
import { randomColorWithOpacity } from '../../utils/utilsFunctions';
import Landscape from '../../svgImages/landscape/Landscape';
import tabs from '../../json/menu';

const Menu = ({history}) => {

    const tabsHtml = tabs.map(tab => {
        const { color, colorWithOpacity } = randomColorWithOpacity();
        return (
            <TabButton 
                key = {tab.key}
                onClick = {() => history.push(tab.route)}
                color = {color}
                colorWithOpacity = {colorWithOpacity}
            >
                {tab.text}
            </TabButton>
        )
    });

    return (
        <TabContainer>
            <Landscape />
            {tabsHtml}
        </TabContainer>
    );
}

export default Menu;
