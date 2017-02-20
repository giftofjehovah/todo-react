import { UPDATE_QUOTE_TO_STATE } from '../constants/actionTypes'

const initialState = 'loading quote...'

export default function quote (state = initialState, action) {
  switch (action.type) {
    case UPDATE_QUOTE_TO_STATE:
      return action.quote
    default:
      return state
  }
}
