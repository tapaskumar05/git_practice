import styled from '@emotion/styled';

const ColorText = styled.span`
    font-size: 50px;
    font-weight: bold;
    margin: 0 1px;
    text-shadow: 2px 2px 2px #00000075;
    ${({ color }) => `
        color: ${color};
    `}
`;

export {
    ColorText
};
