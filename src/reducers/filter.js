import { FILTER_ALL, FILTER_DONE, FILTER_ACTIVE } from '../constants/actionTypes'

const initialState = 'FILTER_ALL'

export default function filter (state = initialState, action) {
  switch (action.type) {
    case FILTER_ALL:
      return action.type
    case FILTER_DONE:
      return action.type
    case FILTER_ACTIVE:
      return action.type
    default:
      return state
  }
}
