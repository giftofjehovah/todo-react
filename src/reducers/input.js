import { TEXT_INPUT } from '../constants/actionTypes'

const initialState = ''

export default function input (state = initialState, action) {
  switch (action.type) {
    case TEXT_INPUT:
      return action.text
    default:
      return state
  }
}
