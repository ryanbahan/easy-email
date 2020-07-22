import { combineReducers } from 'redux';
import { FormReducer } from './FormReducer';
import { VisibilityReducer } from './VisibilityReducer';
import { LoadingReducer } from './LoadingReducer';
import { ErrorReducer } from './ErrorReducer';
import { WarningReducer } from './WarningReducer';

const rootReducer = combineReducers({
  form: FormReducer,
  visibility: VisibilityReducer,
  loading: LoadingReducer,
  error: ErrorReducer,
  warning: WarningReducer,
});

export default rootReducer;
