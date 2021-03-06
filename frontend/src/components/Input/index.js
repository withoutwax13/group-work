import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../Element'

const defaultStyle = `
	border-radius: 5px;
	outline: none;
	width: 100%;
`

const Input = ({...props})=>{
	return (
		<Element
			as='input'
			type='text'
			css={props.customStyle ? defaultStyle + props.customStyle : defaultStyle}
			paddingLeft='5px'
			paddingRight='5px'
			paddingTop='3px'
			paddingBottom='3px'
			{...props}>
				{props.children}
		</Element>
	)
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
	customStyle: PropTypes.string,
	children: PropTypes.node,
	value: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired
}

export default Input