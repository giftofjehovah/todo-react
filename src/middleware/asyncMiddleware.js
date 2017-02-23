const asyncMiddleware = ({dispatch}) => (next) => (action) => {
  if (action.async && typeof action.async === 'function' && !action.status) {
    const pendingAction = Object.assign({}, action, {status: 'PENDING'})
    const successAction = (data) => dispatch(Object.assign({}, action, {status: 'SUCCESS', data}))
    const errorAction = (error) => dispatch(Object.assign({}, action, {status: 'ERROR', error}))
    next(pendingAction)
    action.async(successAction, errorAction)
  }
  return action
}
export default asyncMiddleware
