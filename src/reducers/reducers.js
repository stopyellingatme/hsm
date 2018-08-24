/**
 * TODO   Description of this reducer file and its purpose
 */


/**
 * Account Reducer
 */

const accountIntialState = {
	account: null,
	loading: false,
	error: null
};

function AccountReducer(state = accountIntialState, action) {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case 'SETTING_AUTH':
			newState.loading = true;
			break;
		case 'SET_AUTH':
			newState.loading = false;
			newState.account = action.account;
			break;
		case 'REQUEST_LOGIN':
			newState.loading = true;
			break;
		case 'RECEIVE_LOGIN':
			newState.loading = false;
			newState.account = action.account;
			break;
		case 'REQUEST_SIGNUP':
			newState.loading = true;
			break;
		case 'RECEIVE_SIGNUP':
			newState.loading = false;
			newState.account = action.account;
			break;
		case 'ACCOUNT_ERROR':
			newState.loading = false;
			newState.error = action.message;
			break;
	}
	return newState;
}

/**
 * Company Reducer
 */

const companyIntialState = {
	company: null,
	loading: false,
	error: null
};

function CompanyReducer(state = companyIntialState, action) {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case 'REQUEST_CREATE_COMPANY':
			newState.loading = true;
			break;
		case 'RECEIVE_CREATE_COMPANY':
			newState.loading = false;
			newState.company = action.company;
			break;
		case 'COMPANY_ERROR':
			newState.loading = false;
			newState.error = action.message;
			break;
	}
	return newState;
}





/**
 * *Export Reducers
 */
export default {
	AccountReducer,
	CompanyReducer
}
