import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from '../components/LoginForm'



const LoginPage = () => (
	<div className="login-page">

		<LoginForm />

	</div>
);

export default withRouter(connect()(LoginPage));
