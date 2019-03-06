import React from 'react';
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'

const H1 = styled('h1', {
    shouldForwardProp: prop => isPropValid(prop) && prop !== 'color'
})(props => ({
    color: 'hotpink'
}))

export default class CustomizingPropForwading extends React.Component {
    render() {
        return(
            <H1 color='red'>Pink Text</H1>
        )
    }
}