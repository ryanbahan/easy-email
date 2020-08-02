import { combineReducers } from 'redux';
import { formReducer } from './formReducer';
import { visibilityReducer } from './visibilityReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { warningReducer } from './warningReducer';
import { componentsReducer } from './componentsReducer';

const rootReducer = combineReducers({
  form: formReducer,
  visibility: visibilityReducer,
  components: componentsReducer,
  loading: loadingReducer,
  error: errorReducer,
  warning: warningReducer,
});

export default rootReducer;
