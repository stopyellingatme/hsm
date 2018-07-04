// import firebase from 'firebase';
import * as firebase from "firebase";
// const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


const prodConfig = {
	apiKey: "AIzaSyBMB0dJqaK4TedsmpLmHptqlBDFXjAWHyQ",
	authDomain: "test0-abf15.firebaseapp.com",
	databaseURL: "https://test0-abf15.firebaseio.com",
	projectId: "test0-abf15",
	storageBucket: "test0-abf15.appspot.com",
	messagingSenderId: "964639469440"
};

const devConfig = {
	apiKey: "AIzaSyBMB0dJqaK4TedsmpLmHptqlBDFXjAWHyQ",
	authDomain: "test0-abf15.firebaseapp.com",
	databaseURL: "https://test0-abf15.firebaseio.com",
	projectId: "test0-abf15",
	storageBucket: "test0-abf15.appspot.com",
	messagingSenderId: "964639469440"
};

const config = process.env.NODE_ENV === 'production'
	? prodConfig
	: devConfig;

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);


const db = firestore;
const auth = firebase.auth();

export {
	db,
	auth,
};
