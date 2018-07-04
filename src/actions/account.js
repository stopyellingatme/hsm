import {
	doCreateUserWithEmailAndPassword,
	doLoginWithEmailAndPassword
} from '../firebase/auth';
import { doCreateUser, userLogIn } from '../firebase/db';


/**
 * *ACCOUNT ACTION CONSTANTS
 */
export const SETTING_AUTH = 'SETTING_AUTH';
export const SET_AUTH = 'SET_AUTH';
export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const RECEIVE_SIGNUP = 'RECEIVE_SIGNUP';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const ACCOUNT_ERROR = 'ACCOUNT_ERROR';



/***************************
 * *Sign Up Functions
 ***************************/
function requestSignUp() {
	return {
		type: REQUEST_SIGNUP
	};
}

function receiveSignUp(account) {
	return {
		account,
		type: RECEIVE_SIGNUP
	};
}

/**
 * ACTION: Handles new user sign up
 * @return {Function}
 */
export function signupNewAccount(email, password) {
	return dispatch => {
		dispatch(requestSignUp());
		return doCreateUserWithEmailAndPassword(email, password)
			.then(authUser => {
				// @param  {TYPE} -> Set to PRO until payment gateway is configuered
				dispatch(receiveSignUp(authUser));
				doCreateUser(authUser.uid, email, "PRO");
			})
			.catch(err => {
				console.log(err);
				dispatch(accountError(err));
			});
	};
}

/***************************
 * *Sign In Functions
 ***************************/
function requestLogIn() {
	return {
		type: REQUEST_LOGIN
	};
}

function receiveLogIn(account) {
	return {
		account,
		type: RECEIVE_LOGIN
	};
}
/**
 * *ACTION: Handles login
 * @return {Function}
 */
export function loginUser(email, password) {
	return dispatch => {
		dispatch(requestLogIn());
		return doLoginWithEmailAndPassword(email, password)
			.then(authUser => {

				userLogIn(authUser.uid).then(() => {
					dispatch(receiveLogIn(authUser));

				}).catch(err => {
					dispatch(accountError(err));
				});
			})
			.catch(err => {
				dispatch(accountError(err));
			});
	};
}


/***************************
 * *Set Authentication State
 ***************************/
function settingAuthState() {
	return {
		type: SETTING_AUTH
	};
}

function setAuthState(account) {
	return {
		account,
		type: SET_AUTH
	};
}
/**
 * *ACTION: Handles Authentication State
 * @return {Function}
 */
export function setAuthStatus(account) {
	return dispatch => {
		dispatch(settingAuthState());
		return dispatch(setAuthState(account));
	};
}













/**
 * *ACCOUNT ERROR
 * Handles all account error messages
 * @param  {String} error the error message
 */
function accountError(error) {
	// console.log(error);
	return {
		error,
		type: ACCOUNT_ERROR
	};
}
