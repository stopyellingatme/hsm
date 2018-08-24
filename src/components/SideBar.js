'use strict';
import React, { Component } from 'react';
import { Icon, Input, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SideBar extends Component {
	state = {
		open: false,
		error: null
	}

	render() {
		if (this.props.location.pathname !== '/dashboard') return null;
		const { open, error } = this.state

		return (
			<div className='sidebar-wrapper'>
				<Menu vertical className="__sidebar">
					<Menu.Item>
						<Icon name="grid layout" />
					</Menu.Item>
					<Menu.Item>
						<Input placeholder="Search..." />
					</Menu.Item>

					<Menu.Item>
						OPTIONS

              <Menu.Menu>
							<Menu.Item name="add" onClick={null}>
								Add
                </Menu.Item>
							<Menu.Item name="about" onClick={null}>
								Remove
                </Menu.Item>
						</Menu.Menu>
					</Menu.Item>

					<Menu.Item name="company_list" onClick={this.handleItemClick}>
						Company List:
            </Menu.Item>
				</Menu>
			</div>
		)
	}
}

const mapStatetoProps = (state) => ({
	account: state.account
})

export default withRouter(connect(mapStatetoProps)(SideBar));
