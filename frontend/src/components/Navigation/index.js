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

const Navigation = (props) => {
	const { semantic, customStyle, children, ...rest } = props
	return (
		<Element
			as={semantic === 'link' ? Link : 'a'}
			padding='7px'
			marginleft='7px'
			marginright='7px'
			css={customStyle ? defaultStyle + customStyle : defaultStyle}
			{...rest}>
				{children}
		</Element>
	)
}

Navigation.propTypes = {
	children: PropTypes.node,
	customStyle: PropTypes.string,
	to: PropTypes.string,
	href: PropTypes.string,
	semantic: PropTypes.string.isRequired
}

export default Navigation