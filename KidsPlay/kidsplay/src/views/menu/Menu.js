import React from 'react';
import { TabContainer, TabButton } from './style';

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
        }
    ];

    const tabsHtml = tabs.map(tab => {
        return (
            <TabButton key={tab.key}>
                {tab.text}
            </TabButton>
        )
    });

    return (
        <TabContainer className="route-holder">
            {tabsHtml}
        </TabContainer>
    );
}

export default Menu;