'use strict';
import React from 'react';
import { Button, Modal as _Modal } from 'semantic-ui-react'

/**
 * MODAL COMPONENT
 *
 * Takes Props ->
 * 1. onClose
 * 2. title
 * 3. disabled
 * 4. onRemove
 * 5. onSuccess
 * 6. removeText
 * 7. successText
 * 8. children
 * 9. triggerElement
 * 10. centerered
 *
 */

class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
	}

	toggle = () => {
		this.props.onClose ? (this.props.onClose) : null;
		this.props.onSuccess ? (this.props.onSuccess) : null;

		this.setState({ open: !this.state.open });
	}

	open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

	render() {
		return (
			<_Modal
				trigger={this.props.triggerElement}
				centered={this.props.centered}
				open={this.state.open}
				onOpen={this.open}
        onClose={this.close}
			>
				<_Modal.Header>{this.props.title}</_Modal.Header>
				<_Modal.Content>
					{this.props.children}
				</_Modal.Content>
				<_Modal.Actions>
					{this.props.disabled ?
						(<Button disabled>Close</Button>
						) : (<Button onClick={this.toggle}>Close</Button>)}

					{(this.props.disabled && this.props.onRemove) &&
						<Button disabled>{this.props.removeText}</Button>
					}
					{(this.props.disabled && this.props.onSuccess) &&
						<Button disabled>{this.props.successText}</Button>
					}

					{(!this.props.disabled && this.props.onRemove) &&
						<Button onClick={this.toggle}>{this.props.removeText}</Button>}

					{(!this.props.disabled && this.props.onSuccess) &&
						<Button onClick={this.toggle}>{this.props.successText}</Button>
					}
				</_Modal.Actions>
			</_Modal >
		);
	}
}

export default Modal;
