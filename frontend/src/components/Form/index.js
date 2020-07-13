import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../Element'

const defaultStyle = ``

const Form = ({...props})=>{
	return (
		<Element
			as='form'
			css={props.customStyle ? defaultStyle + props.customStyle : defaultStyle}
			{...props}>
				{props.children}
		</Element>
	)
}

Form.propTypes = {
	customStyle: PropTypes.string,
	children: PropTypes.node
}

export default Form