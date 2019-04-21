import React from 'react';
import { TabContainer, TabButton } from './style';

const Menu = ({history}) => {

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
        }
    ];

    const tabsHtml = tabs.map(tab => {
        return (
            <TabButton 
                key = {tab.key}
                onClick = {() => history.push(tab.route)}
            >
                {tab.text}
            </TabButton>
        )
    });

    return (
        <TabContainer>
            {tabsHtml}
        </TabContainer>
    );
}

export default Menu;