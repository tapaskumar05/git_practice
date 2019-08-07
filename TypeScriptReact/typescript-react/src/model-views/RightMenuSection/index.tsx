import React from 'react';
import { observer, inject } from 'mobx-react'
import Model from '../../model/index';
import * as s from './style';
import GetEmployeesById from '../GetEmployeesById/index';

interface ModelProps {
    model: Model
}

@inject('model')
@observer
class RightMenuSection extends React.Component<ModelProps> {
    static defaultProps = {
        model: {}
    }
    getSections = (selectedId: string) => {
        switch(selectedId) {
            case 'GET_EMPLOYEES_BY_ID':
                return <GetEmployeesById />;
            case 'ALL_EMPLOYEES':
                return <h1>ALL_EMPLOYEES</h1>;
            case 'CREATE_EMPLOYEES':
                return <h1>CREATE_EMPLOYEES</h1>;
            case 'UPDATE_EMPLOYEES':
                return <h1>UPDATE_EMPLOYEES</h1>;
            case 'DELETE_EMPLOYEES':
                return <h1>DELETE_EMPLOYEES</h1>;
            default:
                return <h1>Default</h1>;
        }
    }
    render() {
        const { model } = this.props;
        const { store } = model;
        const { selectedId } = store;
        return(
            <div className={s.rightSection}>
                {this.getSections(selectedId)}
            </div>
        )
    }
}

export default RightMenuSection;
