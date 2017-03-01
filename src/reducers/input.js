import { TEXT_INPUT } from '../constants/actionTypes'

const initialState = ''

export default function input (state = initialState, action) {
  const reducers = {
    [TEXT_INPUT]: () => action.text,
    DEFAULT: () => state
  }
  return (reducers[action.type] || reducers.DEFAULT)()
}
