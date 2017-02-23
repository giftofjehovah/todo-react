import { GET_QUOTE } from '../constants/actionTypes'

const initialState = 'loading quote...'

export default function quote (state = initialState, action) {
  if (action.type === GET_QUOTE && action.status === 'SUCCESS') {
    return action.data
  }
  return state
}
