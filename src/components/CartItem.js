import React, { Component } from "react";
import * as Message from '../redux/constants/Message';

export class CartItem extends Component {
  render() {
    var { item } = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.onUpdate(item.product, item.quantity - 1)}
            >
              <button type="button">—</button>
            </label>
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.onUpdate(item.product, item.quantity + 1)}
            >
              <button type="button">+</button>
            </label>
          </div>
        </td>
        <td>{item.product.price * item.quantity}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onDelete(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
  onDelete = (product) => {
    var {onDeleteProductInCart, onChangeMessage} = this.props;
    onDeleteProductInCart(product);
    onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }
  onUpdate = (product, quantity) => {
    var {onDeleteProductInCart, onUpdateProductInCart, onChangeMessage} = this.props;
    if (quantity > 0) {
      onUpdateProductInCart(product, quantity);
      onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    } else {
      onDeleteProductInCart(product);
      onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
  }
}

export default CartItem;
