// import React from 'react'
import React, { Component } from 'react'

class Message extends Component {
// const Message = ({text}) => {
  onChange() {
    const { actions, messageId } = this.props
    actions.toggleDisplayState(messageId)
  }

  render() {
    const { text } = this.props
    return (
      <div onClick={this.onChange.bind(this)}>
        {text}
      </div>
    )  
  }
}

export default Message