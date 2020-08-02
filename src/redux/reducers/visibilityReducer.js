import { DefaultTemplate } from '../../utils/Templates/DefaultTemplate';
import { getVisibilityState } from '../../utils';

export const visibilityReducer = (state = getVisibilityState(DefaultTemplate), action) => {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return {...state, ...action.payload};
    default:
      return state;
  }
};
