import { GET_QUOTE, UPDATE_QUOTE_TO_STATE } from '../constants/actionTypes'
import { Observable } from 'rxjs'
import quotes from '../api/quotes'

const quoteEpic = action$ => action$.ofType(GET_QUOTE)
  .mergeMap(() => Observable.fromPromise(quotes.get())
     .map(data => ({ type: UPDATE_QUOTE_TO_STATE, quote: data.contents.quotes[0].quote })))

export default quoteEpic
