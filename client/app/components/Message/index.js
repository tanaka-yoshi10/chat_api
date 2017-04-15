import React, { Component } from 'react'

class Message extends Component {
  onChange() {
    const { actions, messageId } = this.props
    actions.toggleDisplayState(messageId)
  }

  onDelete() {
    const { actions, messageId } = this.props
    actions.deleteMessage(messageId)
  }

  render() {
    const { text } = this.props
    return (
      <div>
        <span onClick={this.onChange.bind(this)}>
          {text}
        </span>
        <input type="button" value="削除" onClick={this.onDelete.bind(this)}/>
      </div>
    )  
  }
}

export default Message