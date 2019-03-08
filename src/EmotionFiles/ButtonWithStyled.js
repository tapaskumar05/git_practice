import React from 'react';
import styled from '@emotion/styled'

const Button = styled.button`
  color: hotpink;
`

export default class ButtonWithStyled extends React.Component {
    render() {
        return(
            <Button>Hot Pink Text</Button>
        )
    }
}