import { ADD_MESSAGE, CREATE_MESSAGE_LIST, TOGGLE_DISPLAY_STATE, UPDATE_MESSAGE, DELETE_MESSAGE } from '../constants/chat'

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
})

export const updateMessage = (message) => ({
  type: UPDATE_MESSAGE,
  message,
})

export const createMessageList = (messages) => ({
  type: CREATE_MESSAGE_LIST,
  messages,
})

export const toggleDisplayState = (messageId) => ({
  type: TOGGLE_DISPLAY_STATE,
  messageId,
})

export const deleteMessage = (messageId) => ({
  type: DELETE_MESSAGE,
  messageId,
})
