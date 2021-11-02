const SELECT_TAB = 'SELECT_TAB'

const defaultState = {
  tabName: 'Местоположение'
}

export default function tabReducer(state = defaultState, action) {
  switch (action.type) {
    case SELECT_TAB:
      return {
        ...state,
        tabName: action.payload
      }
    default:
      return state
  }
}