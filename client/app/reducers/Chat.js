import { combineReducers } from 'redux'
import { ADD_MESSAGE, CREATE_MESSAGE_LIST, TOGGLE_DISPLAY_STATE, UPDATE_MESSAGE, DELETE_MESSAGE } from '../constants/chat'

export const chatInitialState = [{"id":2,"text":"message2"},{"id":1,"text":"message1"}]

const chat = (state = '', action) => {
  switch (action.type) {
    case CREATE_MESSAGE_LIST:
      return action.messages.map((message) => {
        message['displayState'] = true
        return message
      })
    case ADD_MESSAGE:
      const message = action.message
      message['displayState'] = true
      return [ ...state, message ]

    case UPDATE_MESSAGE:
      console.log(action.message)
      return state.map((old_message) => {
        if (old_message.id === action.message.id) {
          const new_message = action.message
          new_message.displayState = true
          return new_message
        }
        else {
          return old_message
        }
      })

    case TOGGLE_DISPLAY_STATE:
      return state.map((message) => {
        if (message['id'] === action.messageId) {
          message['displayState'] = !message['displayState']
        }
        return message
      })
    case DELETE_MESSAGE:
      return state.filter((message) => {
        return message['id'] !== action.messageId
      })
    default:
      return state
  }
}

export default chat
