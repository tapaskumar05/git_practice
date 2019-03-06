import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'

export default class MediaQueries extends React.Component {
    render() {
        return(
            <div
                css={{
                color: 'darkorchid',
                '@media(min-width: 420px)': {
                    color: 'orange'
                }
                }}
            >
                This is orange on a big screen and darkorchid on a small
                screen.
            </div>
        )
    }
}