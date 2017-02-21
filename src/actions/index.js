import * as filterActions from './filter'
import * as todoActions from './todo'
import * as quoteActions from './quote'
import * as inputActions from './input'

const actions = Object.assign({}, filterActions, todoActions, quoteActions, inputActions)
export default actions
