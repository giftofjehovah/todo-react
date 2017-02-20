import * as filterActions from './filter'
import * as todoActions from './todo'
import * as quoteActions from './quote'

const actions = Object.assign({}, filterActions, todoActions, quoteActions)
export default actions
