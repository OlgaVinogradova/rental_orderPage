export const selectTab = (title) => {
  return {
    type: 'SELECT_TAB',
    payload: title
  }
}