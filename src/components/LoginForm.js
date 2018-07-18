import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'

import { updateByPropertyName } from '../utils/format'
import { loginUser } from '../actions/account'
import TextInput from './Inputs/TextInput'

import { Button, Form, Header, Segment } from 'semantic-ui-react'


/**
 *  COMPONENT: LOGIN FORM
 */

const INITIAL_STATE = {
	email: '',
	password: '',
	error: null,
};

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
	}

	redirect = (route) => {
		this.props.history.push(route);
	};

	onSubmit = (event) => {
		event.preventDefault();
		const { dispatch } = this.props;
		const {
			email,
			password,
		} = this.state;

		dispatch(loginUser(email, password))
			.then(data => {
				console.log(data);
				this.props.history.push('/dashboard');
			})
			.catch(error => {
				console.log(error);
				this.setState(updateByPropertyName('error', error));
			});
	}

	render() {
		const {
			email,
			password,
			error,
		} = this.state;

		const { loading } = this.props.account;

		const isInvalid =
			password === '' ||
			email === '';

		return (
			<Segment secondary className='login-card' loading={loading} >
				<Header as='h1'>
					Login
				</Header>
				<Form onSubmit={this.onSubmit}>
					<Form.Field>
						<TextInput
							label="Email Address"
							labelSize="large"
							value={email}
							onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
							type="text"
							placeholder="Email Address"
							id="email-input"
							errors={error ? error : ""}
							smallmsg="We'll never share your email with anyone."
							autoFocus
							name="email"
							maxLength={100}
						/>
					</Form.Field>
					<Form.Field>
						<TextInput
							label="Password"
							labelSize="large"
							type="password"
							id="password-input"
							value={password}
							onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
							placeholder="Password"
							errors={error ? error : ""}
							name="password"
							maxLength={100}
						/>
					</Form.Field>
					<br />
					<div className='login-button-container'>
						<Button disabled={isInvalid} type="submit">{"Let's Go!"}</Button>
						<Link to="/signup">
							{"Don't have an account?"}
						</Link>
					</div>


					{error && <p>{error.message}</p>}

				</Form>

			</Segment>

		);
	}
}

const mapStatetoProps = (state) => ({
	account: state.account
})

export default withRouter(connect(mapStatetoProps)(LoginForm));




/*







			<em id="emailHelp" className="form-text text-muted"> {"We'll never share your email with anyone else."}</em>
					</Form.Field>
					<Form.Field>
						<label htmlFor="password-input">Password</label>
						<input
							type="password"
							id="password-input"
							value={password}
							onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
							placeholder="Password"
						/>
						<em id="emailHelp" className="form-text text-muted"> {"Those dots are safe with us."}</em>
					</Form.Field>
					<br />
					<Button disabled={isInvalid} primary fluid type="submit">{"Let's Go!"}</Button>
					<Divider horizontal>Or</Divider>
					<Button as={Link} to="/signup" secondary fluid>{"Don't have an account?"}</Button>


					{error && <p>{error.message}</p>}

				</Form>

			</Segment>



<form className="sign-in-form" onSubmit={this.onSubmit}>
	<div className="form-group">
		<label htmlFor="exampleInputEmail1">Email address</label>
		<input
			value={email}
			onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
			type="text"
			placeholder="Email Address"
			className="form-control"
			id="exampleInputEmail1"
			aria-describedby="emailHelp"
		/>
		<small id="emailHelp" className="form-text text-muted">{"We'll never share your email with anyone else."}</small>
	</div>
	<div className="form-group">
		<label htmlFor="exampleInputPassword1">Password</label>
		<input
			type="password"
			className="form-control"
			id="exampleInputPassword1"
			value={password}
			onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
			placeholder="Password"
		/>
	</div>
	<button className="btn btn-primary" disabled={isInvalid} type="submit">
		Sign In
        </button>

	{error && <p>{error.message}</p>}
</form>
*/
