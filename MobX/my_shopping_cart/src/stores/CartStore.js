import { observable, action, computed } from 'mobx';

class CartStore {
    
    @observable cartItems = [];

    @action addItemsToCart = (item) => {
        this.cartItems.push(item);
    }

    @computed get cartCount () {
        return this.cartItems.length;
    }
}

const store = new CartStore();
export default store;