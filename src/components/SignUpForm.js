import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom';
import { updateByPropertyName } from '../utils/utility';
import { signupNewAccount } from '../actions/account';
import TextInput from './Inputs/TextInput'
import { Button, Form, Checkbox, Header, Segment } from 'semantic-ui-react'

const INITIAL_STATE = {
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null,
};

class SignUpForm extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit = (event) => {
		const { email, passwordOne } = this.state;
		const { dispatch } = this.props;

		dispatch(signupNewAccount(email, passwordOne))
			.then(() => {
				this.props.history.push("/dashboard");
			})
			.catch(error => {
				// console.log(error);
				this.setState(updateByPropertyName('error', error));
			});
		event.preventDefault();
	}

	render() {
		const {
			email,
			passwordOne,
			passwordTwo,
			error,
		} = this.state;

		const { loading } = this.props.account;

		const isInvalid =
			passwordOne !== passwordTwo ||
			passwordOne === '' ||
			email === '';

		return (
			<Segment secondary className='sign-up-card' loading={loading} >
				<Header as='h1'>
					Create Account
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
							id="password-one-input"
							value={passwordOne}
							onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
							placeholder="Password"
							errors={error ? error : ""}
							name="passwordOne"
							maxLength={100}
						/>
					</Form.Field>
					<Form.Field>
						<TextInput
							label="Confirm Password"
							labelSize="large"
							type="password"
							id="password-two-input"
							value={passwordTwo}
							onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
							placeholder="Confirm Password"
							errors={error ? error : ""}
							name="passwordTwo"
							maxLength={100}
						/>
					</Form.Field>
					<Form.Field>
						<Checkbox label='I agree to the Terms and Conditions' />
					</Form.Field>
					<br />
					<div className='signup-button-container'>
						<Button disabled={isInvalid} type="submit">Sign Me Up!</Button>
						<Link to="/login">
							{"Already have an account?"}
						</Link>
					</div>

					{error && <p>{error.message}</p>}

				</Form>

			</Segment>
		)
	}
}

const mapStatetoProps = (state) => ({
	account: state.account
})

export default withRouter(connect(mapStatetoProps)(SignUpForm));













/*



	<Segment
				secondary
				className='sign-up-card'
				loading={loading}
			>
				<Header as='h1'>
					Sign Up
				</Header>
				<Form onSubmit={this.onSubmit}>
					<Form.Field>
						<TextInput
							value={email}
							onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
							type="text"
							placeholder="Email Address"
							id="email-input"
							label="Email Address"
							labelSize="large"
							errors={error ? error : ""}
							smallmsg="We'll never share your email with anyone else."
							autoFocus
							name="email"
							maxLength={100}
						/>
						<label htmlFor="email-input">Email Address</label>
						<input
							value={email}
							onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
							type="text"
							placeholder="Email Address"
							id="email-input"
							aria-describedby="emailHelp"
						/>
						<em id="emailHelp" className="form-text text-muted"> {"We'll never share your email with anyone else."}</em>
					</Form.Field>
					<Form.Field>
						<label htmlFor="password-one-input">Password</label>
						<input
							type="password"
							id="password-one-input"
							value={passwordOne}
							onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
							placeholder="Password"
						/>
						<em id="emailHelp" className="form-text text-muted"> {"Those dots are safe with us."}</em>
					</Form.Field>
					<Form.Field>
						<label htmlFor="password-two-input">Confirm Password</label>
						<input
							type="password"
							id="password-two-input"
							value={passwordTwo}
							onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
							placeholder="Confirm Password"
						/>
					</Form.Field>
					<Form.Field>
						<Checkbox label='I agree to the Terms and Conditions' />
					</Form.Field>
					<br />
					<div className='signup-button-container'>
						<Button disabled={isInvalid} type="submit">Sign Me Up!</Button>
						<Link to="/login">
							{"Already have an account?"}
						</Link>
					</div>

					{error && <p>{error.message}</p>}

				</Form>


*/
