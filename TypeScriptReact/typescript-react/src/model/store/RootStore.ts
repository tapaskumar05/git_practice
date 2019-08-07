import { observable } from 'mobx';
import IRootStore from '../../interface/IRootStore';
import GetEmployeeByIdStore from './GetEmployeeByIdStore';

class RootStore implements IRootStore {
    @observable selectedId: string = 'GET_EMPLOYEES_BY_ID';
    @observable getEmployeeByIdStore = new GetEmployeeByIdStore();
}

export default RootStore;
