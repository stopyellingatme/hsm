'use strict';
import React from 'react';
import { Segment } from 'semantic-ui-react'

/**
 * Tile Component
 * Props =>
 * 1. className: string
 * 2. loading: boolean
 * 3. color: string
 * 4. size: string
 * 5. children: any
 */

const Tile = (props) => {
	return (
		<Segment
			className={`tile ${props.className}`}
			loading={props.laoding}
			color={props.color}
			size={props.size}
		>
			{props.children}
		</Segment>
	);
};

export default Tile;
