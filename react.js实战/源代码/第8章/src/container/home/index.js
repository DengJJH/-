import React from "react";
import { connect } from "react-redux";
import {Route, Switch} from "react-router-dom";


//映射Redux state到组件的属性
function mapStateToProps(state) {
  console.log('home-state', state)
  return {
    shoppingCart: state.shoppingCart
  }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch) {
  return {
    // onAddClick: () => dispatch(addToCart('Coffee 500mg', 1, 250))
  }
}

class Home extends React.Component{
  componentDidMount(){
      
  }

  render() {

    const {
      shoppingCart = {}
    } = this.props;

    const {
      cart = []
    } = shoppingCart;

    console.log('this.props', this.props)

    return (
      <div>共有 {cart.length} 种商品</div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)