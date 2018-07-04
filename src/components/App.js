'use strict'
import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Routes from '../components/Routes'
import Navbar from '../components/Navbar'
import { auth } from '../firebase/firebase';
import { setAuthStatus } from '../actions/account';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {

	componentDidMount = () => {
		const { dispatch } = this.props;
		// Set an Authentication State Listener
		auth.onAuthStateChanged(user => {
			if (user) {
				// User is Signed In
				dispatch(setAuthStatus(user));
				this.redirect('/dashboard');
			} else {
				this.redirect('/'); // Not Signed In
			}
		});
	}

	redirect = (route) => {
		this.props.history.push(route);
	}

	render() {
		return (
			<div className='app-wrapper'>
				<div className="navbar-container">
					<Navbar />
				</div>
				<div className="app-contents">
					<Routes />
				</div>
			</div>
		);
	}
}


export default withRouter(connect()(App));
