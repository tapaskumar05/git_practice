import React from 'react';
import styled from '@emotion/styled'
const H1 = styled.h1({
    fontSize: 20
}, props => ({
    color: props.color
}));
export default class GetValFromProps extends React.Component {
    render() {
        return <H1 color='green'>Green Text</H1>
    }
}