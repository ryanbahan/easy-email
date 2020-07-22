import { DefaultVisibilityState } from '../Templates/DefaultVisibilityState';

export const visibilityReducer = (state = DefaultVisibilityState, action) => {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return {...state, ...action.payload};
    default:
      return state;
  }
};
