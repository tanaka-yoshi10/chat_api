import React, { Component } from 'react'
import Jquery from 'jquery'
import Message from '../Message'
import MessageForm from '../MessageForm'

class MessageList extends Component {
  componentDidMount() {
    const { actions } = this.props
    Jquery.ajax({
      type: 'GET',
      url: '/api/messages',
      success: ((data) => actions.createMessageList(data))
    })
  }

  renderMessage(actions, message) {
    return (
      message.displayState ? <Message key={message.id} text={message.text} /> : <MessageForm key={message.id} message={message} actions={actions} /> 
    )
  }

  render() {
    const { actions, messages } = this.props
    return (
      <div>
        {messages.map((message) => this.renderMessage(actions, message))}
      </div>
    )  
  }
}

export default MessageList