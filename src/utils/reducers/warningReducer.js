export const warningReducer = (state = false, action) => {
  switch (action.type) {
    case 'HAS_WARNING':
      return action.payload
    case 'CLEAR_WARNING':
      return action.payload
    default:
      return state;
  }
};
