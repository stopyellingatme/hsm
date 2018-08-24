import {
	createNewCompany as cnc
} from '../firebase/db';


/**
 * *COMPANY ACTION CONSTANTS
 */
export const REQUEST_CREATE_COMPANY = 'REQUEST_CREATE_COMPANY';
export const RECEIVE_CREATE_COMPANY = 'RECEIVE_CREATE_COMPANY';
export const COMPANY_ERROR = 'COMPANY_ERROR';



/***************************
 * *Sign Up Functions
 ***************************/
function requestCreateCompany() {
	return {
		type: REQUEST_CREATE_COMPANY
	};
}

function receiveCreateCompany(company) {
	return {
		company,
		type: RECEIVE_CREATE_COMPANY
	};
}

/**
 * ACTION: Handles creating a new (blank) Company
 * @return {Function}
 */
export function createNewCompany(name, user_id) {
	return dispatch => {
		dispatch(requestCreateCompany());
		return cnc(name, user_id)
			.then(_company => {

				dispatch(receiveCreateCompany(_company));
			})
			.catch(err => {
				console.log(err);
				dispatch(companyError(err));
			});
	};
}






/**
 * *COMPANY ERROR
 * Handles all company error messages
 * @param  {String} error the error message
 */
function companyError(error) {
	// console.log(error);
	return {
		error,
		type: COMPANY_ERROR
	};
}
