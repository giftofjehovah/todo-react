import { UPDATE_QUOTE_TO_STATE } from '../constants/actionTypes'

const initialState = 'loading quote...'

export default function quote (state = initialState, action) {
  const reducers = {
    [UPDATE_QUOTE_TO_STATE]: () => action.quote,
    DEFAULT: () => state
  }
  return (reducers[action.type] || reducers.DEFAULT)()
}
