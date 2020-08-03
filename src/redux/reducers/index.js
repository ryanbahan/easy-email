import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { warningReducer } from './warningReducer';
import { templateReducer } from './templateReducer';

const rootReducer = combineReducers({
	template: templateReducer,
	loading: loadingReducer,
	error: errorReducer,
	warning: warningReducer
});

export default rootReducer;
