import React from 'react';
import ISingleEmployee from '../../interface/ISingleEmployee';

class SingleEmployeeRow extends React.Component<ISingleEmployee> {
    render() {
        const {
            employeeAge,
            employeeName,
            employeeImage,
            employeeId,
            employeeSalary
        } = this.props;
        return(
            <tr>
                <td>{employeeImage}</td>
                <td>{employeeName}</td>
                <td>{employeeId}</td>
                <td>{employeeAge}</td>
                <td>{employeeSalary}</td>
            </tr>
        )
    }
}

export default SingleEmployeeRow;
