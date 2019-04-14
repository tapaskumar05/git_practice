import styled from '@emotion/styled';

const StartScreenBody = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: cyan;
`;

const StartButton = styled.button`
    width: 200px;
    height: 40px;
    background: violet;
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
`;

export {
    StartScreenBody,
    StartButton
};
