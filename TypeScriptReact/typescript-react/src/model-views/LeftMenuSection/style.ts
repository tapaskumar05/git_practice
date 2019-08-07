import { css } from 'emotion';

export const leftMenu = css`
    display: flex;
    flex-direction: column;
    width: 200px;
`;

export const itemStyle = (selected: boolean) => css`
    height: 40px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 4px 3px inset #ffffffe0;
    margin-bottom: 20px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    border-radius: 4px;
    ${selected ? `
        box-shadow: 0px 0px 4px 3px inset #000000e0;
        color: black;
        background: #ffffffe0
    ` : ``}
`;