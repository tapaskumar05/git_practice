import React from 'react';
import { observer, inject } from 'mobx-react'
import Model from '../../model/index';
import * as s from './style';

interface LeftMenuItem {
    id: string,
    name: string
}

interface ModelProps {
    model: Model
}

@inject('model')
@observer
class LeftMenuSection extends React.Component<ModelProps, {}> {
    leftMenuItems: LeftMenuItem[];
    static defaultProps = {
        model: {}
    }
    constructor (props: ModelProps) {
        super(props);
        this.leftMenuItems = [
            {
                id: 'GET_EMPLOYEES_BY_ID',
                name: 'Get Employees By ID'
            }, {
                id: 'ALL_EMPLOYEES',
                name: 'All Employees'
            }, {
                id: 'CREATE_EMPLOYEES',
                name: 'Create Employees'
            }, {
                id: 'UPDATE_EMPLOYEES',
                name: 'Update Employees'
            }, {
                id: 'DELETE_EMPLOYEES',
                name: 'Delete Employees'
            }
        ];
    }
    render () {
        const { model } = this.props;
        const { store, actions } = model;
        const { selectedId } = store;
        const { changeTab } = actions;
        return (
            <div className={s.leftMenu}>
                {
                    this.leftMenuItems.map(item => (
                        <div
                            key={item.id}
                            className={s.itemStyle(item.id === selectedId)}
                            onClick={e => changeTab(item.id)}
                        >
                            {item.name}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default LeftMenuSection;
