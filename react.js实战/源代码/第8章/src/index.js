import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  // Redirect,
  Switch
} from "react-router-dom";
import {
  Provider,
  connect,
} from 'react-redux';
import store from './store.js';
import {
  addToCart,
  updateCart,
  deleteFromCart
} from './actions/cart-actions';

import Home from "./container/home/index";

// console.log('initial state:', store.getState());

// let unsubscribe = store.subscribe(() =>
// 	console.log(store.getState())
// );

store.dispatch(addToCart('Coffee 500mg', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));
store.dispatch(addToCart('test goods', 10, 250));

store.dispatch(updateCart('Flour 1kg', 5, 110));
store.dispatch(deleteFromCart('Coffee 500mg'));

// unsubscribe();

//action
const changeTextAction = {
  type: 'UPDATE_CART'
}
const buttonClickAction = {
  type: 'ADD_TO_CART'
}

//映射Redux state到组件的属性
function mapStateToProps(state) {
  console.log('state', state)
  return {
    shoppingCart: state.shoppingCart
  }
}
 
//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
  return{
    onButtonClick:() => dispatch(buttonClickAction),
    onChangeText:() => dispatch(changeTextAction),
    onAddClick: () => dispatch(addToCart('Coffee 500mg', 1, 250))
  }
}
//定义组件
class App extends Component{
  render() {
    const {
      shoppingCart,
      onChangeText,
      onButtonClick,
      onAddClick
    } = this.props;
    const {
      cart = []
    } = shoppingCart;
    return (
      <div>
        {
          cart.map((item, index) => (
            <div key={`item-${index}`} onClick={onChangeText}> {`${item.product}-${item.quantity}`} </div>
          ))
        }
        <button onClick={onAddClick}>add cart</button>
      </div>
    );
  }
}
//连接组件
App = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Home />
  </Provider> ,
  document.getElementById('root')
);