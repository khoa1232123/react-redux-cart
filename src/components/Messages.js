import React, { Component } from "react";

export class Messages extends Component {
  render() {
    var {message} = this.props;
    return (
      <h3>
        <span className="badge amber darken-2">
          {message}
        </span>
      </h3>
    );
  }
}

export default Messages;
