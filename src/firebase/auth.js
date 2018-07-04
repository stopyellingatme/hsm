import { auth } from './firebase';

// Sign Up via Auth API
export const doCreateUserWithEmailAndPassword = (email, password) =>
	auth.createUserWithEmailAndPassword(email, password);

// Sign In via Auth API
export const doLoginWithEmailAndPassword = (email, password) =>
	auth.signInWithEmailAndPassword(email, password);

// Sign out via Auth API
export const doSignOut = () =>
	auth.signOut();

// Password Reset via Auth API
export const doPasswordReset = (email) =>
	auth.sendPasswordResetEmail(email);

// Password Change via Auth API
export const doPasswordUpdate = (password) =>
	auth.currentUser.updatePassword(password);
