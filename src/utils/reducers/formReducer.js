import { DefaultState } from '../Templates/DefaultState';

export const formReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {...state, ...action.payload}
    default:
      return state;
  }
};
