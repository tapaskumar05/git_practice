import React from 'react';
import { Provider } from 'mobx-react';
import Model from '../../model/index';
import LeftMenuSection from '../LeftMenuSection';
import RightMenuSection from '../RightMenuSection';
import * as s from './style';

class EmployeeManagement extends React.Component<{}> {
    private model: Model = new Model();
    render() {
        return(
            <Provider model={this.model}>
                <div className={s.employeeBodySection}>
                    <LeftMenuSection />
                    <RightMenuSection />
                </div>
            </Provider>
        )
    }
}

export default EmployeeManagement;
