const SELECT_TAB = 'SELECT_TAB'

const defaultState = {
  title: 'Местоположение'
}

export default function tabReducer(state = defaultState, action) {
  switch (action.type) {
    case SELECT_TAB:
      return {
        ...state,
        title: action.payload
      }
    default:
      return state
  }
}