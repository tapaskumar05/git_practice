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
                {item.right ? (
                    <HeaderDataPoint>
                        {item.right}
                    </HeaderDataPoint>
                ) : null}
            </Header>
            {item.image && (
                <Image 
                    src={item.image}
                />
            )}
            {item.html || null}
            <Footer>
                {item.footerText}
            </Footer>
        </Item>
    );
};

export default SingleItemViewer;