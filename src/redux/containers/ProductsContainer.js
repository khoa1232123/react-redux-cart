import React, { Component } from 'react'
import { connect } from 'react-redux'
import Products from '../../components/Products'
import ProductItem from '../../components/ProductItem'
import PropTypes from 'prop-types'
import {actAddToCart, actChangeMessage} from '../actions/index';

export class ProductsContainer extends Component {
  render() {
    var {products} = this.props;
    console.log(this.props);
    
    return (
      <Products>
        {this.showProductItem(products)}
      </Products>
    )
  }
  showProductItem(products) {
    var result = null;
    var {onAddToCart, onChangeMessage} = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem 
        key={index} 
        product={product} 
        onAddToCart={onAddToCart}
        onChangeMessage={onChangeMessage}
        />
      })
    }
    return result;
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      investory: PropTypes.number,
      rating: PropTypes.number
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired
}

const mapStateTopProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    }
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)( ProductsContainer );
