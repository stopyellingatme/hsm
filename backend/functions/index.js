// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
import * as dateformat from 'dateformat';


admin.initializeApp();
const https = functions.https;

//* --->    firebase deploy --only functions   <--- RUN THIS TO DEPLOY ONLY FUNCTIONS

//#region User
exports.userOnCreate = functions.auth.user().onCreate((user) => {
	const email = user.email;
	const id = user.id;
	const type = "PRO";

	admin.firestore.collection(`users`).doc(`${id}`).set({
		id,
		email,
		type,
		lastLogin: dateformat(new Date(), 'dddd, mmmm d, yyyy, hh:MM:ss TT.'),

		// Collection of companies which the user has access to
		read_only: {},
		read_write: {},

		// ** GENERIC TX DATA
		createAt: dateformat(new Date(), 'dddd, mmmm d, yyyy, hh:MM:ss TT.'),
		updatedAt: dateformat(new Date(), 'dddd, mmmm d, yyyy, hh:MM:ss TT.'),
		archived: false,
		archivedAt: "",

	});
});

//#endregion


//#region HTTPS FUNCTIONS
exports.basicAPI = https.onRequest((req, res) => {
	res.send("Firebase API working!");
});

exports.companyOnCreate = https.onRequest((req, res) => {
	/**
	 * Grab the necessary parameters
	 * Hit this endpoint - Send these params...
	 * inside the promise when a company is created on the front end
	 */
	const companyId = req.query.companyId;
	const name = req.query.companyName;
	const userId = req.query.userId;

	admin.firestore.collection(`companies`).doc(`${companyId}`).set({
		//* Identifying Fields
		companyId: companyId,
		name: name,
		//* List<User> -- List of Users
		read_only: {},
		read_write: { userId },

		//* Nullable Fields
		mainSector: "",
		subSector: "",
		location: "",
		description: "",
		logo: "",

		//* Current Health Score
		healthScore: 0,

		//* Financial Data -- Lists of financial data
		healthScoreData: {},
		financialRatioData: {},
		balanceSheetData: {},
		incomeStatementData: {},
		cashFlowsStatementData: {},

		// ** GENERIC TX DATA
		createdAt: dateformat(new Date(), 'dddd, mmmm d, yyyy, hh:MM:ss TT.'),
		createdBy: userId,
		updatedAt: dateformat(new Date(), 'dddd, mmmm d, yyyy, hh:MM:ss TT.'),
		updatedBy: userId,
		archived: false,
		archivedAt: "",
		archivedBy: ""

	}).then(company => {
		return res.send(200, `Success! You created a new Company! Here it is: ${company}`);
	}).catch(error => {
		return res.send(500, error);
	});

});


exports.createHealthScoreData = https.onRequest((req, res) => {
	/**
	 * Grab the necessary parameters
	 * Hit this endpoint - Send these params...
	 * inside the promise when a company is created on the front end
	 */
	const companyId = req.query.companyId;
	const userId = req.query.userId;
	const qStart = req.query.qStart;
	const qEnd = req.query.qEnd;


	admin.firestore.collection(`healthScoreData`).doc(`${companyId}`).set({
		//* Identifying Fields
		companyId: companyId,
		quarterStart: qStart,
		quarterEnd: qEnd,

		//* Current Health Score
		healthScore: 0,

		//* Ratio Fields
		// CashAndCashEquivalents DIVIDED BY TotalExpenses
		primaryReserveRatio: 0,
		// CashAndCashEquivalents DIVIDED BY LongTermDebt
		viabilityRatio: 0,
		// DeltaNetAssets DIVIDED BY CurrentQuarterNetAssets
		returnOnNetAssetsRatio: 0,
		// NetIncome DIVIDED BY NetSales
		netOperatingRevenueRatio: 0,

		//* Financial Data -- Lists of financial data
		cashAndCashEquivalents: 0,
		totalExpenses: 0,
		longTermDebt: 0,
		deltaNetAssets: 0,
		currentQuarterNetAssets: 0,
		netIncome: 0,
		netSales: 0,

		// ** GENERIC TX DATA
		createdAt: dateformat(new Date(), 'dddd, mmmm d, yyyy, hh:MM:ss TT.'),
		createdBy: userId,
		updatedAt: dateformat(new Date(), 'dddd, mmmm d, yyyy, hh:MM:ss TT.'),
		updatedBy: userId,
		archived: false,
		archivedAt: "",
		archivedBy: ""

	}).then(company => {
		return res.send(200, `Success! You created a new Company! Here it is: ${company}`);
	}).catch(error => {
		return res.send(500, error);
	});

});
//#endregion

//#region Firestore Functions: Company
// -- Safer then creating open endpoints
exports.generateCompany = functions.firestore
	.document('companies/{companyId}')
	.onCreate((snap, context) => {
		// Get an object representing the document
		const newValue = snap.data();

		const companyId = context.params.companyId;
		const companyName = context.params.name;
		const userId = context.params.userId;

		snap.set({
			//* Identifying Fields
			companyId: companyId,
			name: companyName,
			//* List<User> -- List of Users
			read_only: {},
			read_write: { userId },

			//* Nullable Fields
			mainSector: "",
			subSector: "",
			location: "",
			description: "",
			logo: "",

			//* Current Health Score
			healthScore: 0,

			//* Financial Data -- Lists of financial data
			healthScoreData: {},
			financialRatioData: {},
			balanceSheetData: {},
			incomeStatementData: {},
			cashFlowsStatementData: {},

			// ** GENERIC TX DATA
			createdAt: dateformat(new Date(), 'dddd, mmmm d, yyyy, hh:MM:ss TT.'),
			createdBy: userId,
			updatedAt: dateformat(new Date(), 'dddd, mmmm d, yyyy, hh:MM:ss TT.'),
			updatedBy: userId,
			archived: false,
			archivedAt: "",
			archivedBy: ""
		}, { merge: true });

	});

exports.generateHealthScoreData = functions.firestore
	.document('healthScoreData/{companyId}')
	.onCreate((snap, context) => {
		// Get an object representing the document
		const newValue = snap.data();

		const companyId = context.params.companyId;
		const userId = context.params.userId;
		const qStart = context.params.qStart;
		const qEnd = context.params.qEnd;

		snap.set({
		//* Identifying Fields
		companyId: companyId,
		quarterStart: qStart,
		quarterEnd: qEnd,

		//* Current Health Score
		healthScore: 0,

		//* Ratio Fields
		// CashAndCashEquivalents DIVIDED BY TotalExpenses
		primaryReserveRatio: 0,
		// CashAndCashEquivalents DIVIDED BY LongTermDebt
		viabilityRatio: 0,
		// DeltaNetAssets DIVIDED BY CurrentQuarterNetAssets
		returnOnNetAssetsRatio: 0,
		// NetIncome DIVIDED BY NetSales
		netOperatingRevenueRatio: 0,

		//* Financial Data -- Lists of financial data
		cashAndCashEquivalents: 0,
		totalExpenses: 0,
		longTermDebt: 0,
		deltaNetAssets: 0,
		currentQuarterNetAssets: 0,
		netIncome: 0,
		netSales: 0,

		// ** GENERIC TX DATA
		createdAt: dateformat(new Date(), 'dddd, mmmm d, yyyy, hh:MM:ss TT.'),
		createdBy: userId,
		updatedAt: dateformat(new Date(), 'dddd, mmmm d, yyyy, hh:MM:ss TT.'),
		updatedBy: userId,
		archived: false,
		archivedAt: "",
		archivedBy: ""
		}, { merge: true });

	});
//#endregion

//#region Firestore Functions: User
exports.myFunctionName = functions.firestore
	.document('users/marie').onWrite((change, context) => {
		// ... Your code here
	});


exports.createUser = functions.firestore
	.document('users/{userId}')
	.onCreate((snap, context) => {
		// Get an object representing the document
		// e.g. {'name': 'Marie', 'age': 66}
		const newValue = snap.data();

		// access a particular field as you would any JS property
		const name = newValue.name;

		// perform desired operations ...

		// Fetch data using standard accessors
		const age = snap.data().age;
		// const name = snap.data()['name'];

		// Fetch data using built in accessor
		const experience = snap.get('experience');
	});

exports.updateUser = functions.firestore
	.document('users/{userId}')
	.onUpdate((change, context) => {
		// Get an object representing the document
		// e.g. {'name': 'Marie', 'age': 66}
		const newValue = change.after.data();

		// ...or the previous value before this update
		const previousValue = change.before.data();

		// access a particular field as you would any JS property
		const name = newValue.name;

		// perform desired operations ...
	});


exports.deleteUser = functions.firestore
	.document('users/{userID}')
	.onDelete((snap, context) => {
		// Get an object representing the document prior to deletion
		// e.g. {'name': 'Marie', 'age': 66}
		const deletedValue = snap.data();

		// perform desired operations ...
	});


exports.updateUser = functions.firestore
	.document('users/{userId}')
	.onUpdate((change, context) => {
		// Get an object representing the current document
		const newValue = change.after.data();

		// ...or the previous value before this update
		const previousValue = change.before.data();

	});

//#endregion

//#region Extra

// Listen for updates to any `user` document.
exports.countNameChanges = functions.firestore
	.document('users/{userId}')
	.onUpdate((change, context) => {
		// Retrieve the current and previous value
		const data = change.after.data();
		const previousData = change.before.data();

		// We'll only update if the name has changed.
		// This is crucial to prevent infinite loops.
		if (data.name == previousData.name) return null;

		// Retrieve the current count of name changes
		let count = data.name_change_count;
		if (!count) {
			count = 0;
		}

		// Then return a promise of a set operation to update the count
		return change.after.ref.set({
			name_change_count: count + 1
		}, { merge: true });
	});


// Listen for changes in all documents and all sub-collections
exports.useWildcard = functions.firestore
	.document('users/{userId}')
	.onWrite((change, context) => {
		// If we set `/users/marie` to {name: "marie"} then
		// context.params.userId == "marie"
		// ... and ...
		// change.after.data() == {name: "Marie"}
	});


// Listen for changes in all documents and all subcollections
exports.useMultipleWildcards = functions.firestore
	.document('users/{userId}/{messageCollectionId}/{messageId}')
	.onWrite((change, context) => {
		// If we set `/users/marie/incoming_messages/134` to {body: "Hello"} then
		// context.params.userId == "marie";
		// context.params.messageCollectionId == "incoming_messages";
		// context.params.messageId == "134";
		// ... and ...
		// change.after.data() == {body: "Hello"}
	});

	//#endregion




















































































// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
// exports.addMessage = functions.https.onRequest((req, res) => {
// 	// Grab the text parameter.
// 	const original = req.query.text;

// 	//* Augment to do things with firestore instrad of the realtime db


// 	// Push the new message into the Realtime Database using the Firebase Admin SDK.
// 	return admin.database().ref('/messages').push({ original: original }).then((snapshot) => {
// 		// Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
// 		return res.redirect(303, snapshot.ref.toString());
// 	});
// });
