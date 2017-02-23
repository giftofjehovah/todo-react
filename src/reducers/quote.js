import { GET_QUOTE } from '../constants/actionTypes'

const initialState = 'loading quote...'

export default function quote (state = initialState, action) {
  switch (action.type) {
    case GET_QUOTE:
      if (action.status === 'SUCCESS') return action.data
      if (action.status === 'ERROR') return 'error getting quote'
      return state
    default:
      return state
  }
}
