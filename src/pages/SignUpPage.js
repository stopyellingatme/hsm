import React from 'react';
import { withRouter } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm'



const SignUpPage = () => (
	<div className="sign-up-page">
		<SignUpForm />

	</div>
);

export default withRouter(SignUpPage);
