import React from 'react';
import styled from '@emotion/styled';
const BasicComponent = ({className}) => (
    <div className={className}>Random Text</div>
)
const Fancy = styled(BasicComponent)`
    color: yellowGreen
`;
export default class StylingComponent extends React.Component {
    render() {
        return <Fancy />
    }
}