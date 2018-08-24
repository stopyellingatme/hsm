import dateformat from 'dateformat';
import { db } from './firebase';
// import user_schema from '../../models/User';


/**
 * Add User Sign Up data to DB
 * via firebase (firestore) API
 */
export function doCreateUser(id, email, type) {
	db.collection(`users`).doc(`${id}`).set({
		id,
		email,
		type,
		createAt: dateformat(new Date(), 'dddd, mmmm d, yyyy, hh:MM:ss TT.'),
		lastLogin: dateformat(new Date(), 'dddd, mmmm d, yyyy, hh:MM:ss TT.')
	});
}



/**
 * Update User Upon Sign In
 */
export const userLogIn = (id) =>
	db.collection(`users`).doc(`${id}`).update({
		lastLogin: dateformat(new Date(), 'dddd, mmmm d, yyyy, hh:MM:ss TT.')
	});


/**
 * Create New Company
 */
export const createNewCompany = (name, user_id) => (
	db.collection(`companies`).add({
		name: name,
		mainSector: "",
		subSector: "",
		headquarters: "",
		readOnly: {},
		readWrite: { user_id },

		createdAt: dateformat(new Date(), 'dddd, mmmm d, yyyy, hh:MM:ss TT.'),
		createdBy: "",
		updatedAt: "",
		updatedBy: "",
		archived: false,
		archivedAt: "",
		archivedBy: ""
	}).then(res => {
		let comp_id = res.id;
		db.collection(`users`).doc(user_id).update({
			readOnly: {},
			readWrite: { comp_id }
		})
	})
);


