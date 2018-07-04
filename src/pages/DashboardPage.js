import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SideBar from '../components/SideBar'
import Tile from '../components/Tile'



const DashboardPage = () => (
	<div className="dashboard-page-wrapper">
		<SideBar />
		<div className='dashboard-content'>

			<Tile size="big" color="black" className="dashboard-tile-one">
				<h1>The Run Down:</h1>
			</Tile>

			<Tile size="big" color="blue" className="dashboard-tile">
				<h1>Extra Detail</h1>
			</Tile>

			<Tile size="big" color="green" className="dashboard-tile">
				<h1>Graphical Readout</h1>
			</Tile>

			<Tile size="big" color="orange" className="dashboard-tile">
				<h1>Auxiliary Data</h1>
			</Tile>

		</div>


	</div>
);

export default withRouter(connect()(DashboardPage));
