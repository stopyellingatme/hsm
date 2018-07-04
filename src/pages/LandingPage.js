import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Segment } from 'semantic-ui-react'

const LandingPage = () => {
	return (
		<div className='landing-page-container'>
			<Segment className='landing-page-card'>
				<Header as="h1">{"Tacklin' Fuel"}</Header>

				<Header as="h2">&nbsp; Fuel Contains:</Header>
				<ul>
					<li>React and Redux</li>
					<li>Sass &amp; Semantic UI</li>
					<li>Firebase - Auth, Firestore, &amp; Cloud Functions</li>
					<li>Go to the firebase.js file and input your api stuff</li>
					<li>You can <Link to="/signup">Sign Up</Link> or <Link to="/login">Login</Link></li>
					<li>Example: The Account Redux actions fire off a Firebase auth &amp; db functions</li>
					<br />
					<br />
					<li>Striped down version of React Slingshot</li>
				</ul>
			</Segment>
		</div>
	);
};

export default LandingPage;
