"use strict";
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Icon, Dropdown, Transition } from "semantic-ui-react";
import { auth } from '../firebase/firebase'

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: this.props.history.pathname,
			visible: false
		};
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	toggleVisibility = () => this.setState({ visible: !this.state.visible })

	handleItemClick(e, { name }) {
		this.setState({ activeItem: name });
	}


	render() {
		const {
			activeItem,
			visible
		} = this.state;

		const authenticated_navbar = (
			<Menu stackable className="navbar">
				<Menu.Item
					className='logo'
					as={NavLink}
					to="/"
				>
					<img src="https://react.semantic-ui.com/logo.png" />
				</Menu.Item>
				<Menu.Item
					className="nav-link"
					as={NavLink}
					to="/dashboard"
					name="Dashboard"
					active={activeItem === "dashboard"}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					className="nav-link"
					as={NavLink}
					to="/authenticated"
					name="Authenticated"
					active={activeItem === "auth"}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					className="nav-link"
					as={NavLink}
					to="/about"
					name="About"
					active={activeItem === "about"}
					onClick={this.handleItemClick}
				/>
				<Menu.Menu position="right">
					<Dropdown
						className="nav-link"
						text={<Icon fitted size="big" name="setting" />}
						onClick={this.toggleVisibility}
						floating
						basic
					>
						<Transition visible={visible} animation='scale' duration={200}>
							<Dropdown.Menu>
								<Dropdown.Item text='New' />
								<Dropdown.Item text='Open...' description='ctrl + o' />
								<Dropdown.Item text='Save as...' description='ctrl + s' />
								<Dropdown.Item text='Rename' description='ctrl + r' />
								<Dropdown.Item text='Make a copy' />
								<Dropdown.Item icon='folder' text='Move to folder' />
								<Dropdown.Item icon='trash' text='Move to trash' />
								<Dropdown.Divider />
								<Dropdown.Item text='Download As...' />
								<Dropdown.Item text='Publish To Web' />
								<Dropdown.Item text='E-mail Collaborators' />
							</Dropdown.Menu>
						</Transition>
					</Dropdown>
				</Menu.Menu>
			</Menu>
		);

		const non_authenticated_navbar = (
			<Menu stackable className="navbar">
				<Menu.Item
					className='logo'
					as={NavLink}
					to="/"
				>
					<img src="https://react.semantic-ui.com/logo.png" />
				</Menu.Item>
				<Menu.Item
					className="nav-link"
					as={NavLink}
					to="/login"
					name="Login"
					active={activeItem === "login"}
					onClick={this.handleItemClick}
				/>
			</Menu>
		);

		/**
		 * This is what gets returned
		 */
		if (auth.currentUser) {
			// User Is Authenticated
			return authenticated_navbar;
		} else {
			// User Is NOT Authenticated
			return non_authenticated_navbar;
		}

	}
}

export default withRouter(NavBar);













/*

<Menu.Menu position="right">
					<Menu.Item className="nav-link" active={activeItem === "dropdown"} onClick={this.handleItemClick}>
						<Dropdown text={<Icon fitted size="big" name="setting" />}>
						<Transition visible={visible} animation='scale' duration={500}>
							<Dropdown.Menu>
								<Dropdown.Item text='New' />
								<Dropdown.Item text='Open...' description='ctrl + o' />
								<Dropdown.Item text='Save as...' description='ctrl + s' />
								<Dropdown.Item text='Rename' description='ctrl + r' />
								<Dropdown.Item text='Make a copy' />
								<Dropdown.Item icon='folder' text='Move to folder' />
								<Dropdown.Item icon='trash' text='Move to trash' />
								<Dropdown.Divider />
								<Dropdown.Item text='Download As...' />
								<Dropdown.Item text='Publish To Web' />
								<Dropdown.Item text='E-mail Collaborators' />
							</Dropdown.Menu>
						</Transition>
						</Dropdown>
					</Menu.Item>
				</Menu.Menu>
			</Menu>

*/
