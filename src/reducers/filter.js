import { FILTER_ALL, FILTER_DONE, FILTER_ACTIVE } from '../constants/actionTypes'

const initialState = 'FILTER_ALL'

export default function filter (state = initialState, action) {
  const reducers = {
    [FILTER_ALL]: () => action.type,
    [FILTER_DONE]: () => action.type,
    [FILTER_ACTIVE]: () => action.type,
    DEFAULT: () => state
  }
  return (reducers[action.type] || reducers.DEFAULT)()
}
