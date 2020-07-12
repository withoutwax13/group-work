import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../Element'

const defaultStyle = `
	font-family: 'Courier New';
`

const Heading = ({...props}) => {
	return (
		<Element
			as={props.semantic || 'h4'}
			css={props.customStyle ? defaultStyle + props.customStyle : defaultStyle}
			{...props}>
				{props.children}
		</Element>
	)
}

Heading.propTypes = {
	semantic: PropTypes.string,
	customStyle: PropTypes.string,
	children: PropTypes.node
}

export default Heading