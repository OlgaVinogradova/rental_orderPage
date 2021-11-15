export const selectTab = (name) => {
  return {
    type: 'SELECT_TAB',
    payload: name
  }
}