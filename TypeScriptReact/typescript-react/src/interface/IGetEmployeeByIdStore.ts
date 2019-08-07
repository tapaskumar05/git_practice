import IEmployee from '../interface/IEmployee';

export default interface IGetEmployeeByIdStore {
    inputValue: string;
    showEmployeeData: boolean;
    employeeId: string;
    employeeName: string;
    employeeSalary: string;
    employeeImage: string;
    employeeAge: string;
    searchBtnStatus: string;
    error: string;
    resetData(): void;
    setEmployeeData(employeeData: IEmployee): void;
}