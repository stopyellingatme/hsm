import React from 'react';
import { Link } from 'react-router-dom';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
	return (
		<div className='about-page-container'>
			<h1>About Page</h1>
			<p>
				So much room for activities!
      </p>
			<p>
				<Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
		</div>
	);
};

export default AboutPage;
