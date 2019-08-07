import { action } from 'mobx';
import IActions from '../../interface/IActions';
import RootStore from '../store/RootStore';
import getEmployeesById from '../../helpers/request/getEmployeesById';

class Actions implements IActions {
    store: RootStore;
    constructor(store: RootStore) {
        this.store = store;
    }
    @action
    changeTab = (id: string) => {
        this.store.selectedId = id;
    }
    @action
    handleEmployeeIdSearchInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value;
        this.store.getEmployeeByIdStore.inputValue = inputValue;
        if (inputValue) {
            this.store.getEmployeeByIdStore.searchBtnStatus = 'ENABLE';
        }
    }
    @action
    searchEmployeeById = async (e: React.FormEvent<HTMLButtonElement>) => {
        this.store.getEmployeeByIdStore.searchBtnStatus = 'SEARCHING';
        this.store.getEmployeeByIdStore.error = '';
        const employeeId = this.store.getEmployeeByIdStore.inputValue;
        const data = await getEmployeesById(employeeId);
        if (data.isSuccess) {
            const { employeeData } = data;
            this.store.getEmployeeByIdStore.setEmployeeData(employeeData);
        } else {
            this.store.getEmployeeByIdStore.error = data.error;
        }
        this.store.getEmployeeByIdStore.showEmployeeData = true;
        this.store.getEmployeeByIdStore.searchBtnStatus = 'ENABLED';
    }
}

export default Actions;