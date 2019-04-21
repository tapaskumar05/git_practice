import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const bubbleAnimation = keyframes`
    0% {
        -webkit-transform: scale(1);
        transform: scale(1); }

    20% {
        -webkit-transform: scaleY(0.95) scaleX(1.05);
        transform: scaleY(0.95) scaleX(1.05); }

    48% {
        -webkit-transform: scaleY(1.1) scaleX(0.9);
        transform: scaleY(1.1) scaleX(0.9); }

    68% {
        -webkit-transform: scaleY(0.98) scaleX(1.02);
        transform: scaleY(0.98) scaleX(1.02); }

    80% {
        -webkit-transform: scaleY(1.02) scaleX(0.98);
        transform: scaleY(1.02) scaleX(0.98); }

    97%, 100% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`;

const Bubble = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    position: relative;
    ${({ color }) => `
        background: ${color};
    `}
    -webkit-animation: ${bubbleAnimation} 2s ease-out infinite;
    animation: ${bubbleAnimation} 2s ease-out infinite;
    margin: 10px;
    :before {
        content: "";
        position: absolute;
        top: 1%;
        left: 5%;
        width: 90%;
        height: 90%;
        border-radius: 100%;
        background: radial-gradient(circle at top, white, rgba(255, 255, 255, 0) 58%);
        -webkit-filter: blur(5px);
        filter: blur(5px);
        z-index: 2;
    }
    :after {
        content: "";
        position: absolute;
        display: none;
        top: 5%;
        left: 10%;
        width: 80%;
        height: 80%;
        border-radius: 100%;
        -webkit-filter: blur(1px);
        filter: blur(1px);
        z-index: 2;
        -webkit-transform: rotateZ(-30deg);
        transform: rotateZ(-30deg);
    }
`;

export {
    Bubble
};