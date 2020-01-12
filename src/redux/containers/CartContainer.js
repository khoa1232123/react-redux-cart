import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Cart from '../../components/Cart';
import * as Message from '../constants/Message';
import CartItem from '../../components/CartItem';
import CartResult from '../../components/CartResult';
import {actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from '../actions/index';

export class CartContainer extends Component {
  render() {
    var {cart} = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showCartResult(cart)}
      </Cart>
    )
  }
  showCartItem = (cart) => {
    var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
    var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem 
          key={index} 
          item={item}
          index={index}
          onDeleteProductInCart={onDeleteProductInCart}
          onUpdateProductInCart={onUpdateProductInCart}
          onChangeMessage={onChangeMessage}
        />
      })
    }
    return result;
  }
  showCartResult = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />
    }
    return result;
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf( PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      investory: PropTypes.number,
      rating: PropTypes.number
    }).isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onDeleteProductInCart: PropTypes.func.isRequired,
  onUpdateProductInCart: PropTypes.func.isRequired,
}

const mapStateTopProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actDeleteProductInCart(product))
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(actUpdateProductInCart(product, quantity));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    }
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)( CartContainer );
