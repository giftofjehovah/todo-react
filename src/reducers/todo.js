const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]
function todos (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return 1
    default:
      return state
  }
}

export default todos
