'use strict';
import React from 'react';
import { connect } from 'react-redux';
import TextInput from '../Inputs/TextInput';
import { createNewCompany } from "../../actions/company";
import { Button, Dropdown, Modal } from "semantic-ui-react";


class NewCompanyModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			companyName: '',
			visible: false,
			error: {}
		};
		this.clearState = this.clearState.bind(this);
	}

	clearState() {
		this.setState({
			companyName: '',
			visible: false,
			error: {}
		});
	}

	toggle = () => {
		this.setState({ visible: !this.state.visible });
	}

	componentWillUnmount() {
		this.clearState();
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { dispatch } = this.props;
		dispatch(createNewCompany(this.state.companyName, this.props.userId)).then(() => {
			this.toggle();
		});
	}

	render() {
		return (
			<Modal
				open={this.state.visible}
				onOpen={this.toggle}
				onClose={this.toggle}
				trigger={<Dropdown.Item text='New Compnay' />}
			>
				<Modal.Header>{"New Company"}</Modal.Header>
				<Modal.Content>
					<form className="account-info-modal form form-horizontal">
						<TextInput
							name="companyName"
							title="Company Name"
							value={this.state.companyName}
							onClick={(e) => e.target.select()}
							onChange={this.handleChange}
							label={<label>Company Name <span className="required-field-star">*</span></label>}
							errors={this.state.error}
							autoFocus
							noLine
						/>
					</form>
				</Modal.Content>
				<Modal.Actions>
					<Button onClick={this.toggle}>{"Cancel"}</Button>
					<Button onClick={this.handleSubmit} loading={this.props.company ? (this.props.company.loading) : false}>{"Let's Go!"}</Button>
				</Modal.Actions>
			</Modal >
		);
	}
}

const mapStatetoProps = (state) => ({
	company: state.company
})


export default connect(mapStatetoProps)(NewCompanyModal);
