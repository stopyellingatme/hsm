// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
console.log(admin);


//* --->    firebase deploy --only functions   <--- RUN THIS TO DEPLOY ONLY FUNCTIONS


exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
	const email = user.email; // The email of the user.
	// ...
});

exports.sendByeEmail = functions.auth.user().onDelete((user) => {
	// ...
});

exports.basicAPI = functions.https.onRequest((request, response) => {
	response.send("Firebase API working!");
});


// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest((req, res) => {
	// Grab the text parameter.
	const original = req.query.text;

	//* Augment to do things with firestore instrad of the realtime db


	// Push the new message into the Realtime Database using the Firebase Admin SDK.
	// return admin.database().ref('/messages').push({ original: original }).then((snapshot) => {
		// Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
		// return res.redirect(303, snapshot.ref.toString());
	// });
});

// Listen for any change on document `marie` in collection `users`
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
