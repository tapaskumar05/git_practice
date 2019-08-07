import RootStore from './store/RootStore';
import Actions from './actions/index';

class Model {
    store: RootStore;
    actions: Actions;
    constructor() {
        this.store = new RootStore();
        this.actions = new Actions(this.store);
    }
}

export default Model;

// export interface IEmployeeStore {
//     selectedId: string
//     changeSelectedId(id: string): void
// }

// export class EmployeeStore implements IEmployeeStore {
//     selectedId: string;
//     constructor (props: {}) {
//         this.selectedId = 'GET_EMPLOYEES_BY_ID';
//     }
//     changeSelectedId = (id: string) => {
//         this.selectedId = id;
//     }
// }
// decorate (EmployeeStore, {
//     selectedId: observable,
//     changeSelectedId: action
// });