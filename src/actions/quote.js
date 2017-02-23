import * as types from '../constants/actionTypes'
import * as quotes from '../api/quotes'

export const getQuote = () => ({type: types.GET_QUOTE, async: quotes.get})
