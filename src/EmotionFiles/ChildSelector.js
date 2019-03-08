import React from 'react';
/* @jsx jsx */
import { jsx } from '@emotion/core'

export default class ChildSelector extends React.Component {
    render() {
        return(
            <div
                css={{
                color: 'darkorchid',
                '& .name': {
                    color: 'orange'
                }
                }}
            >
                This is darkorchid.
                <div className="name">This is orange</div>
            </div>
        )
    }
}