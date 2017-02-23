const asyncMiddleware = ({dispatch}) => (next) => (action) => {
  if (checkAsyncActions(action)) {
    const [pendingAction, successDispatch, errorDispatch] = [
      Object.assign({...action, status: 'PENDING'}),
      (data) => dispatch({...action, status: 'SUCCESS', data}),
      (error) => dispatch({...action, status: 'ERROR', error})
    ]
    next(pendingAction)
    return action.async(successDispatch, errorDispatch)
  }
  return next(action)
}

function checkAsyncActions (action) {
  return action.async && typeof action.async === 'function' && !action.status
}

export const actionsLogger = ({dispatch}) => (next) => (action) => {
  console.log(action)
  return next(action)
}
export default asyncMiddleware
