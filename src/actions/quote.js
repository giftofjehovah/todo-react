import * as types from '../constants/actionTypes'

export const getQuote = (api) => ({ type: types.GET_QUOTE, api })
export const updateQuoteToState = (quote) => ({ type: types.UPDATE_QUOTE_TO_STATE, quote })
