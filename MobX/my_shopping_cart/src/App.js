import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './App.css';

@inject('CartStore')
@observer
class App extends Component {
  addItemToCart = (e) => {
    e.preventDefault();
    const newItem = this.inputEle.value;
    this.props.CartStore.addItemsToCart(newItem);
    this.inputEle.value = '';
  }
  render() {
    const { CartStore } = this.props;
    return (
      <div className="App">
        Total Items in Cart : {CartStore.cartCount}
        <form onSubmit={(e) => this.addItemToCart(e)}>
          <input type="text" placeholder="Search Items to Add" ref={input => this.inputEle = input}/>
          <button>Add To Cart</button>
        </form>
        Items in Cart:
        <ul>
        {
          CartStore.cartItems.map((item,i) => (
            <li key={i}>{item}</li>
          ))
        }
        </ul>
      </div>
    );
  }
}

export default App;
