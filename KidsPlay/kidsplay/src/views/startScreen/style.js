import styled from '@emotion/styled';

const StartScreenBody = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: cyan;
    display: flex;
    flex-direction: column;
`;

const StartButton = styled.button`
    display: flex;
    justify-content: space-evenly;
    padding: 0 48px 0 40px;;
    align-items: center;
    width: 250px;
    height: 70px;
    font-size: 30px;
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    color: hsl(340, 100%, 30%) !important;
    background-color: hsl(340, 100%, 75%);
    box-shadow: inset rgba(255,254,255,0.6) 0 0.3em .3em, inset rgba(0,0,0,0.15) 0 -0.1em .3em, /* inner shadow */ hsl(340, 70%, 50%) 0 .1em 3px, hsl(340, 80%, 40%) 0 .3em 1px, /* color border */ rgba(0,0,0,0.2) 0 .5em 5px;
    border-radius: 5em 1em / 5em 1em;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    background-image: -webkit-gradient(radial, 50% 0, 100, 50% 0, 0, from( rgba(255,255,255,0) ), to( rgba(255,255,255,0.7) ));
    :hover {
        box-shadow: inset rgba(255,254,255,0.6) 0 0.3em .3em, inset rgba(0,0,0,0.15) 0 -0.1em .3em, /* inner shadow */ hsl(340, 70%, 50%) 0 .1em 3px, hsl(340, 80%, 40%) 0 .1em 1px, /* color border */ rgba(0,0,0,0.2) 0 .1em 5px;
    }
`;

const Icon = styled.i`
    font-size: 40px;
`;

export {
    StartScreenBody,
    StartButton,
    Icon
};
