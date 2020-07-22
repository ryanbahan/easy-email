export const errorReducer = (state = false, action) => {
  switch (action.type) {
    case 'ERROR':
      return action.payload.message
    case 'CLEAR_ERROR':
      return action.payload
    default:
      return state;
  }
};
