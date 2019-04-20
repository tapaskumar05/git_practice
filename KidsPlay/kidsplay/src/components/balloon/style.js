import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const animateBalloons = keyframes`
    0% {
        bottom: -1%;
    }
    100% {
        bottom: 100%;
    }
`;

const Balloon = styled.div`
    height: 130px;
    width: 104px;
    border-radius: 80% 80% 80% 80%;
    position: relative;
    margin: 100px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 75px;
    color: #fff;
    ${( { left } ) => `
        left: ${left}%;
    `}
    -webkit-animation: ${animateBalloons} 35s linear infinite;
	-moz-animation: ${animateBalloons} 35s linear infinite;
	animation: ${animateBalloons} 35s linear infinite;
    ${( { color } ) => `
        background-color: ${color};
    `}
    :before {
        content: "";
        color: rgba(182, 15, 97, 0.9);
        position: absolute;
        bottom: -9px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        ${( { color } ) => `
            border-bottom: 10px solid ${color};
        `}
    }
    :after {
        display: inline-block;
        top: 129px;
        position: absolute;
        height: 250px;
        width: 1px;
        margin: 0 auto;
        content: "";
        background: rgba(0,0,0,0.2);
    }
`;

const BalloonRef = styled.div`
    position: absolute;
    left: 0px;
    top: 0;
    width: 100%;
    height: 80%;
    border-radius: 90%;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,0.41015625) 0%, rgba(148,214,233,0) 100%);
`;

const TopC = styled.span`
    position: absolute;
    top: 0px;
    left: 20px;
    width: 15px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.6);
    transform: rotate(48deg);
`;

const LeftC = styled.span`
    position: absolute;
    top: 36px;
    left: 6px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.6);
    transform: rotate(48deg);
`;

export {
    Balloon,
    BalloonRef,
    TopC,
    LeftC
};
