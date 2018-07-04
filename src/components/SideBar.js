'use strict';
import React, { Component } from 'react';
import { Dropdown, Icon, Input, Menu, Portal, Segment, Button, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class SideBar extends Component {
	state = {
		open: false,
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	handleOpen = () => {
		this.setState({ open: true })
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	render() {
		if (this.props.location.pathname !== '/dashboard') return null;
		const { activeItem, open } = this.state

		return (
			<div className='sidebar-wrapper'>
				<Menu vertical className="__sidebar">
					<Menu.Item className="logo-area">
						<Icon className="logo" loading name="code" />
					</Menu.Item>
					<Menu.Item>
						<Input placeholder="Search..." />
					</Menu.Item>

					<Menu.Item>
						Home

              <Menu.Menu>
							<Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
								Search
                </Menu.Item>
							<Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
								Add
                </Menu.Item>
							<Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
								Remove
                </Menu.Item>
							<Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
								Search
                </Menu.Item>
							<Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
								Add
                </Menu.Item>
							<Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
								Remove
                </Menu.Item>
							<Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
								Search
                </Menu.Item>
							<Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
								Add
                </Menu.Item>
							<Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
								Remove
                </Menu.Item>
							<Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
								Search
                </Menu.Item>
							<Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
								Add
                </Menu.Item>
							<Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
								Remove
                </Menu.Item>
							<Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
								Search
                </Menu.Item>
							<Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
								Add
                </Menu.Item>
							<Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
								Remove
                </Menu.Item>
							<Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
								Search
                </Menu.Item>
							<Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
								Add
                </Menu.Item>
							<Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
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
					<Menu.Item name="messages" active={activeItem === 'messages'} onClick={this.handleItemClick}>
						Messages
            </Menu.Item>
				</Menu>
			</div>
		)
	}
}

export default withRouter(SideBar);
