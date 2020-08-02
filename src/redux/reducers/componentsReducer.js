import { DefaultTemplate } from '../../utils/Templates/DefaultTemplate';
import { getPreviewComponents } from '../../utils';

export const componentsReducer = (state = getPreviewComponents(DefaultTemplate), action) => {
  switch (action.type) {
    default:
      return state;
  }
};