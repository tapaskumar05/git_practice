/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'

const base = css`
  color: hotpink;
`
const hotpink = css({
    color: 'hotpink'
})
const hotpinkHoverOrFocus = css({
    ':hover,:focus': hotpink
})
const hotpinkWithBlackBackground = css({
    backgroundColor: 'black',
    color: 'green'
}, hotpink)
export default class Composition extends React.Component {
    render() {
        return(
            <>
            <div
                css={css`
                ${base};
                background-color: #eee;
                `}
            >
                This is hotpink.
            </div>
            <div>
                <p css={hotpink}>This is hotpink</p>
                <button css={hotpinkHoverOrFocus}>
                    This is hotpink on hover or focus
                </button>
                <p css={hotpinkWithBlackBackground}>
                    This has a black background and is hotpink. Try moving
                    where hotpink is in the css call and see if the color
                    changes.
                </p>
            </div>
            </>
        )
    }
}