import React, { Component } from 'react'
import Jquery from 'jquery'

class MessageForm extends Component {
  onSubmit() {
    const { actions } = this.props
    Jquery.ajax({
      type: 'POST',
      url: '/api/messages',
      data: {
        message: {text: this.textMessage.value}
      },
      success: ((data) => actions.addMessage(data))
    })
  }

  onCancel() {
    const { actions, message } = this.props
    actions.toggleDisplayState(message.id)
  }

  render() {
    const { message } = this.props
    const cancelButton = message ? <input type="button" value="キャンセル" onClick={this.onCancel.bind(this)}/> : ''
    const text = message ? message.text : ''
    return (
      <div>
        <textarea rows="4" cols="40" ref={(input) => { this.textMessage = input }} defaultValue={text} />
        {cancelButton}
        <input type="button" value="登録" onClick={this.onSubmit.bind(this)}/>
      </div>
    )
  }
}

export default MessageForm