import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Element } from '../Element'

const defaultStyle = `
	color: white;
	font-family: 'Courier New';
	outline: none;
	text-decoration: none;
`

const Navigation = ({...props}) => {
	return (
		<Element
			as={props.link ? Link : 'a'}
			padding='7px'
			marginLeft='7px'
			marginRight='7px'
			css={props.customStyle ? defaultStyle + props.customStyle : defaultStyle}
			{...props}>
				{props.children}
		</Element>
	)
}

Navigation.propTypes = {
	children: PropTypes.node,
	customStyle: PropTypes.string,
	to: PropTypes.string,
	href: PropTypes.string
}

export default Navigation