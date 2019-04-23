import { observable, action, computed, set } from 'mobx';
import routeJson from '../json/routeBasedData';

class KidsPlayStore {

    @observable currentRoute = '/';
    @observable currentDataSet = {};
    @observable currentIndex = 0;
    
    @computed get currentRouteDataArr () {
        return routeJson[this.currentRoute].dataArr;
    }

    @action setCurrentIndex = (index) => {
        this.currentIndex = index;
    }

    @action setCurrentDataSet = (location) => {
        const currentLocationPath = location.pathname;
        const pathArr = currentLocationPath.split('/');
        this.currentRoute = pathArr[1];
        this.currentSemiRoute = pathArr[2];
        this.currentIndex = this.currentRouteDataArr.indexOf(this.currentSemiRoute);
    }

}

const store = new KidsPlayStore();
export default store;