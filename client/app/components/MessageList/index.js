import React, { Component } from 'react'
import Message from '../Message'

class MessageList extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.createMessageList(
      [{"id":3,"text":"message3"},{"id":2,"text":"message2"},{"id":1,"text":"message1"}]
    )
  }

  render() {
    const { messages } = this.props
    return (
      <div>
        {messages.map((message) => <Message key={message.id} text={message.text} />)}
      </div>
    )  
  }
}

export default MessageList