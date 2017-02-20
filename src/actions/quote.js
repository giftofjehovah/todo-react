import * as types from '../constants/actionTypes'

export const getQuote = () => ({ type: types.GET_QUOTE })
export const updateQuoteToState = (quote) => ({ type: types.UPDATE_QUOTE_TO_STATE, quote })
