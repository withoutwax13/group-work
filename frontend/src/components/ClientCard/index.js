import React from 'react'
import { connect } from 'react-redux'

import { Element } from '../Element'
import Avatar from '../Avatar'

const defaultStyle = () => {
	return `
		background-color: #dedad7;
		border: 1px solid gray;
		border-radius: 10px;
		box-shadow: 2px 2px 2px gray;
		height: 100%;
        width: 100%;
		display: flex;
		flex-direction: row;
		max-width: 300px;
	`
}

const ClientCard = ({...props}) => {

	const { customStyle, CLIENT, ...rest } = props

	if (CLIENT) {
		return (
			<Element
				css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
				{...rest}>
					<Avatar imageUrl={CLIENT.signedInImageUrl}/>
					<Element></Element>
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