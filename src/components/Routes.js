'use strict'
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage'
import AuthPage from '../pages/AuthenticatedPage'
import DashboardPage from '../pages/DashboardPage'

import { auth } from '../firebase/firebase';

class Routes extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Switch>

				<Route exact path="/" component={LandingPage} />
				<Route path="/signup" component={SignUpPage} />
				<Route path="/login" component={LoginPage} />

				<Route path="/authenticated" render={() => (auth.currentUser ? (<AuthPage />) : (<Redirect to="/login" />))} />
				<Route path="/dashboard" render={() => (auth.currentUser ? (<DashboardPage />) : (<Redirect to="/login" />))} />

				<Route path="/about" component={AboutPage} />
				<Route component={NotFoundPage} />

			</Switch>
		)
	}
}

export default Routes;
