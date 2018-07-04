import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { doSignOut } from '../firebase/auth'



const AuthPage = () => (
	<div className="authenticated-page-wrapper">

		<h1>This is an authenticated page! Woohoo!</h1>
		<br />
		<h3><a href="" onClick={doSignOut}> Sign Out!</a></h3>

	</div>
);

export default withRouter(connect()(AuthPage));
