import React, { Component } from 'react'
import { connect } from 'react-redux'
import Messages from '../../components/Messages';
import PropTypes from 'prop-types'

export class MessageContainer extends Component {
  render() {
    var {message} = this.props;
    console.log(message);
    
    return (
      <Messages message={message} />
    )
  }
}

MessageContainer.propTypes = {
  message: PropTypes.string.isRequired
}

const mapStateTopProps = state => {
  return {
    message: state.message
  }
}

export default connect(mapStateTopProps, null)( MessageContainer );
