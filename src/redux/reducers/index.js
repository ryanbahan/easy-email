import { combineReducers } from 'redux';
import { formReducer } from './formReducer';
import { visibilityReducer } from './visibilityReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { warningReducer } from './warningReducer';
import { componentsReducer } from './componentsReducer';
import { templateReducer } from './templateReducer';

const rootReducer = combineReducers({
  form: formReducer,
  visibility: visibilityReducer,
  components: componentsReducer,
  template: templateReducer,
  loading: loadingReducer,
  error: errorReducer,
  warning: warningReducer,
});

export default rootReducer;
