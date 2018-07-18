'use strict';
import React, { Component } from 'react';
import { Dropdown, Icon, Input, Menu, Portal, Segment, Button, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class SideBar extends Component {
	state = {
		open: false,
	}

	handleOpen = () => {
		this.setState({ open: true })
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	render() {
		if (this.props.location.pathname !== '/dashboard') return null;
		const { open } = this.state

		return (
			<div className='sidebar-wrapper'>
				<Menu vertical className="__sidebar">
					<Menu.Item>
						<Input placeholder="Search..." />
					</Menu.Item>

					<Menu.Item>
						OPTIONS

              <Menu.Menu>
							<Menu.Item name="search" onClick={null}>
								Search
                </Menu.Item>
							<Menu.Item name="add" onClick={null}>
								Add
                </Menu.Item>
							<Menu.Item name="about" onClick={null}>
								Remove
                </Menu.Item>
						</Menu.Menu>
					</Menu.Item>

					<Menu.Item>
						<Icon name="grid layout" />
						<Portal
							closeOnTriggerClick
							openOnTriggerClick
							trigger={(
								<Button
									content={open ? 'Close Portal' : 'Open Portal'}
									negative={open}
									positive={!open}
								/>
							)}
							onOpen={this.handleOpen}
							onClose={this.handleClose}
						>
							<Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
								<Header>This is an example portal</Header>
								<p>Portals have tons of great callback functions to hook into.</p>
								<p>To close, simply click the close button or click away</p>
							</Segment>
						</Portal>
					</Menu.Item>
					<Menu.Item name="messages" onClick={this.handleItemClick}>
						Messages
            </Menu.Item>
				</Menu>
			</div>
		)
	}
}

export default withRouter(SideBar);
