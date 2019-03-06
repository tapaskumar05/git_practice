/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
const textStyle = css({
    padding: '10px',
    width: '150px',
    backgroundColor: 'hotpink',
    fontSize: '14px',
    borderRadius: '4px',
    color: 'pink',
    '&:hover': {
        color: 'green'
    }
})
const SomeHOC = ({children}) => (
    <div css={textStyle}>
        Some text
        {children}
    </div>
)
const normalComponentStyle = css({
    color: 'blue',
    fontSize: '18px',
    '&:hover': {
        color: '#fff'
    }
})
const NormalComponent = () => (
    <div css={normalComponentStyle}>
        This component contains Style of NormalComponent.
    </div>
)
export default class Button extends React.Component {
    render() {
        return(
            <SomeHOC>
                <NormalComponent />
            </SomeHOC>
        )
    }
}