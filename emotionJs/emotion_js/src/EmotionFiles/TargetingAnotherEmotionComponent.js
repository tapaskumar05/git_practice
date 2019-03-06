import React from 'react';
import styled from '@emotion/styled'

const Child = styled.div`
    color: red
`;
// const Parent = styled.div`
//     ${Child} {
//         color: green
//     }
// `;
const Parent = styled.div`
    color: green
`;
export default class TargetingAnotherEmotionComponent extends React.Component {
    render() {
        return(
            <>
            <Parent>
                <Child>Green</Child>
            </Parent>
            <Child>Red</Child>
            </>
        )
    }
}