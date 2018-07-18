import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Segment } from 'semantic-ui-react'

const LandingPage = () => {
	return (
		<div className='landing-page-container'>
			<Segment className='landing-page-card'>
				<Header as="h1">{"HSM"}</Header>

				<Header as="h2">&nbsp; Health Score Monitor:</Header>
				<ul>
					<li>Monitor the financial health of any company</li>
				</ul>
			</Segment>
		</div>
	);
};

export default LandingPage;
