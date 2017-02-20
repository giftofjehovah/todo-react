import { GET_QUOTE, UPDATE_QUOTE_TO_STATE } from '../constants/actionTypes'
import { Observable } from 'rxjs'

const quoteEpic = action$ => action$
.ofType(GET_QUOTE)
  .mergeMap((action) => Observable.fromPromise(action.api())
    .map(data => ({ type: UPDATE_QUOTE_TO_STATE, quote: data.contents.quotes[0].quote })))

export default quoteEpic
