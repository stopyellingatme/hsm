import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducers from './reducers';

const rootReducer = combineReducers({
	account: reducers.AccountReducer,
	routing: routerReducer
});

export default rootReducer;
