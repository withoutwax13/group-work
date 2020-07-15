import React from 'react'
import { connect } from 'react-redux'

import { Element } from '../Element'

const defaultStyle = () => {
	return `
		border: 1px solid gray;
		border-radius: 10px;
		box-shadow: 2px 2px 2px gray;
		
	`
}

const ClientCard = ({...props}) => {

	const { customStyle, CLIENT, ...rest } = props

	if (CLIENT) {
		return (
			<Element
				css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
				{...rest}>
					{CLIENT.signedInName}
			</Element>
		)
	}
	else {
		return (
			<Element
				css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
				{...rest}>
					Loading...
			</Element>
		)
	}
}

const mapStateToProps = ({CLIENT_LOG_DATA}) => {
	return {
		CLIENT: CLIENT_LOG_DATA
	}
}

export default connect(mapStateToProps)(ClientCard)