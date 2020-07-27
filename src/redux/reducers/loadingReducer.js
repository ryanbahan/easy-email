export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.payload
    default:
      return state;
  }
};
