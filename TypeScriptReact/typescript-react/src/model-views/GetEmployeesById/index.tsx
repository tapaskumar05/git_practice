import React from 'react';
import { observer, inject } from 'mobx-react';
import Model from '../../model/index';
import SingleEmployeeRow from '../../components/SingleEmployeeRow';
import EmployeeRowHeader from '../../components/EmployeeRowHeader';
import * as s from './style';

interface ModelProps {
    model: Model
};

@inject('model')
@observer
class GetEmployeesById extends React.Component<ModelProps> {
    static defaultProps = {
        model: {}
    }
    render() {
        const { model } = this.props;
        const { actions, store } = model;
        const { getEmployeeByIdStore } = store;
        const {
            error,
            employeeAge,
            employeeName,
            employeeImage,
            employeeId,
            employeeSalary,
            showEmployeeData,
            searchBtnStatus
        } = getEmployeeByIdStore;
        const { handleEmployeeIdSearchInputChange, searchEmployeeById } = actions;
        return (
            <div>
                <input type="text" placeholder="Employee ID" onChange={handleEmployeeIdSearchInputChange} className={s.inputClass} />
                <button onClick={searchEmployeeById} disabled={searchBtnStatus === 'DISABLED' || searchBtnStatus === 'SEARCHING'} className={s.btnClass}>Search</button>
                <div className={s.data}>
                    {error ?
                        <div>{error}</div>
                        :
                        showEmployeeData && searchBtnStatus !== 'SEARCHING' ? 
                            <table className={s.tableStyle}>
                                <EmployeeRowHeader />
                                <tbody>
                                    <SingleEmployeeRow
                                        employeeAge={employeeAge}
                                        employeeName={employeeName}
                                        employeeImage={employeeImage}
                                        employeeId={employeeId}
                                        employeeSalary={employeeSalary}
                                    />
                                </tbody>
                            </table>
                            :
                            null
                    }
                    {searchBtnStatus === 'SEARCHING' ? <div> SEARCHING ... </div> : null}
                </div>
            </div>
        )
    }
}

export default GetEmployeesById;
