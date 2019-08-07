import { observable, action } from 'mobx';
import IGetEmployeeByIdStore from '../../interface/IGetEmployeeByIdStore';
import IEmployee from '../../interface/IEmployee';

class GetEmployeeByIdStore implements IGetEmployeeByIdStore {
    @observable inputValue: string = '';
    @observable showEmployeeData: boolean = false;
    @observable employeeId: string = '';
    @observable employeeName: string = '';
    @observable employeeSalary: string = '';
    @observable employeeImage: string = '';
    @observable employeeAge: string = '';
    @observable searchBtnStatus: string = 'DISABLED';
    @observable error: string = '';

    @action
    resetData = () => {
        this.employeeId = '';
        this.employeeName = '';
        this.employeeSalary = '';
        this.employeeImage = '';
        this.employeeAge = '';
        this.showEmployeeData = false;
        this.searchBtnStatus = 'DISABLED';
        this.error = '';
    }

    @action
    setEmployeeData = (employeeData: IEmployee) => {
        this.employeeId = employeeData.id;
        this.employeeName = employeeData.employee_name;
        this.employeeSalary = employeeData.employee_salary;
        this.employeeImage = employeeData.profile_image;
        this.employeeAge = employeeData.employee_age;
    }
}

export default GetEmployeeByIdStore;
