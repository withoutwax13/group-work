import React from 'react'
import { connect } from 'react-redux'

import device from '../../utils/responsiveBreakpoints'
import { Element } from '../Element'

const defaultStyle = () => {
	return `
		border: 1px solid gray;
		border-radius: 10px;
		box-shadow: 2px 2px 2px gray;
		
	`
}

const ClientCard = ({...props}) => {

	const { customStyle, ...rest } = props

	return (
		<Element
			css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
			{...rest}>
				ClientCard
		</Element>
	)
}

export default connect(null)(ClientCard)