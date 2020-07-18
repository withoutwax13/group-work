import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../Element'

const defaultStyle = `
	font-family: 'Courier New';
	outline: none;
	color: white;
	text-decoration: none;
`

const Heading = (props) => {
	const { semantic, customStyle, children, ...rest } = props
	return (
		<Element
			as={semantic || 'h4'}
			css={customStyle ? defaultStyle + customStyle : defaultStyle}
			{...rest}>
				{children}
		</Element>
	)
}

Heading.propTypes = {
	semantic: PropTypes.any,
	customStyle: PropTypes.string,
	children: PropTypes.node
}

export default Heading