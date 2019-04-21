import React from 'react';
import {Item, Header, HeaderDataPoint, Image, Footer} from './style';

const SingleItemViewer = ({item}) => {
    return (
        <Item 
            className = "viewer-item"
            key = {item.key}
        >
            <Header>
                <HeaderDataPoint>
                    {item.left}
                </HeaderDataPoint>
                <HeaderDataPoint>
                    {item.right}
                </HeaderDataPoint>
            </Header>
            <Image 
                src={item.image}
            />
            <Footer>
                {item.footerText}
            </Footer>
        </Item>
    );
};

export default SingleItemViewer;