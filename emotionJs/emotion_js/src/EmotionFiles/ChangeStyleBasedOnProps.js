import React from 'react';
import styled from '@emotion/styled'
const Button = styled.button`
  color: ${props => props.primary ? 'hotpink': 'lightblue'};
`

export default class ChangeStyleBasedOnProps extends React.Component {
    render() {
        return(
            <>
                <Button>Normal Button</Button>
                <Button primary>Primary Button</Button>
            </>
        )
    }
}