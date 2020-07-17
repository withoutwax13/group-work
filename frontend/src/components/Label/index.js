import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../Element'

const defaultStyle = `
	font-family: 'MS Sans Serif';
`

const Label = ({...props})=>{
	return (
		<Element
			as='label'
			css={props.customStyle ? defaultStyle + props.customStyle : defaultStyle}
			{...props}>
				{props.children}
		</Element>
	)
}

Label.propTypes = {
	htmlFor: PropTypes.string,
	children: PropTypes.node,
	customStyle: PropTypes.string
}

export default Label