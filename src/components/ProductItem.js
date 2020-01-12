import React, { Component } from "react";
import * as Message from '../redux/constants/Message';
export class ProductItem extends Component {
  render() {
    var { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt={product.name} />
              <div className="mask waves-light waves-effect waves-light"></div>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                {product.name}
              </strong>
            </h4>
            <ul className="rating">{this.showRatings(product.rating)}</ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <button
                  type="button"
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                  onClick={() => this.onAddToCart(product)}
                >
                  <i className="fa fa-shopping-cart"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
  }

  showRatings(rating) {
    var result = [];
    for (var i = 1; i <= rating; i++) {
      result.push(<i key={i} className="fa fa-star"></i>);
    }
    for (var j = 1; j <= 5 - rating; j++) {
      result.push(<i key={j + i} className="fa fa-star-o"></i>);
    }
    return result;
  }
}

export default ProductItem;
