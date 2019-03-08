import React from 'react';
import { Global, css } from '@emotion/core'

export default class Globals extends React.Component {
    render() {
        return null;
        return(
            <div>
                <Global
                styles={css`
                    * {
                    color: hotpink !important;
                    }
                `}
                />
                <Global
                styles={{
                    '.some-class': {
                    fontSize: 50,
                    textAlign: 'center'
                    }
                }}
                />
                <div className="some-class">
                Everything is hotpink now!
                </div>
            </div>
        )
    }
}