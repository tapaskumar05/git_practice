import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const zoomTabAnimation = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

const TabContainer = styled.div`

`;

const TabButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    min-height: 170px;
    width: calc(100% - 40px);
    ${({colorWithOpacity}) => `
        background: ${colorWithOpacity};
    `}
    position: relative;
    overflow: hidden;
    margin: 30px 20px 15px;
    animation: ${zoomTabAnimation} 1s ease;
    :before {
        content: "";
        position: absolute;
        width: 200%;
        height: 200%;
        border-radius: 50%;
        ${({colorWithOpacity}) => `
            box-shadow: 90px 60px 0px ${colorWithOpacity};
        `}
        top: -95%;
        left: -96%;
    }
    :after {
        content: "";
        position: absolute;
        width: 200%;
        height: 200%;
        border-radius: 50%;
        ${({colorWithOpacity}) => `
            box-shadow: -90px 60px 0px ${colorWithOpacity};
        `}
        top: -122%;
        left: -23%;
    }
`;

const TabTextStyle = styled.div`
    font-size: 50px;
    font-weight: bold;
    margin: 0 1px;
    text-shadow: 2px 2px 2px #00000075;
    ${({color}) => `
        color: ${color};
    `}
`;

export {
    TabContainer,
    TabButton,
    TabTextStyle
}