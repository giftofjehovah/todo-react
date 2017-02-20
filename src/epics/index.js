import { combineEpics } from 'redux-observable'
import quoteEpic from './quotes'

const rootEpic = combineEpics(
  quoteEpic
)

export default rootEpic
