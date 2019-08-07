import { css } from 'emotion';

export const tableStyle = css`
    width: 100%;
    border-collapse: collapse;
    th {
        text-transform: capitalize;
        border: 1px solid white;
        padding: 10px 20px;
    }
    td {
        padding: 4px 20px;
        border: 1px solid white;
    }
`;

export const inputClass = css`
    height: 36px;
    width: 200px;
    border-radius: 4px;
    font-size: 16px;
    padding: 10px;
    box-sizing: border-box;
    border: none;
    :focus {
        outline: none;
    }
`;

export const btnClass = css`
    height: 36px;
    width: 100px;
    margin-left: 20px;
    font-size: 16px;
    box-shadow: 0px 0px 2px 2px inset #000000e0;
    color: black;
    border-radius: 4px;
    border: none;
    cursor: pointer;
`;

export const data = css`
    margin-top: 20px;
`;