import { DefaultTemplate } from '../../utils/Templates/DefaultTemplate';
import { getDefaultState } from '../../utils';

export const formReducer = (state = getDefaultState(DefaultTemplate), action) => {
  switch (action.type) {
    case 'UPDATE':
      return {...state, ...action.payload}
    default:
      return state;
  }
};
