import React from 'react'
import { connect } from 'react-redux'

import { Element } from '../Element'

import Avatar from '../Avatar'
import Heading from '../Heading'

const defaultStyle = () => {
	return `
		background-color: black;
		border: 1px solid silver;
		border-radius: 10px;
		height: 100%;
        width: 100%;
		display: flex;
		flex-direction: row;
		max-width: 320px;
	`
}

const ClientCard = ({...props}) => {

	const { customStyle, CLIENT, ...rest } = props
	const nameCharLimit = 10

	if (CLIENT) {
		return (
			<Element
				css={customStyle ? defaultStyle() + customStyle : defaultStyle()}
				{...rest}>
					<Avatar imageUrl={CLIENT.signedInImageUrl}/>
					<Element
						css='margin-left: 5px; margin-bottom: 5px; margin-top: auto;'>
						<Heading 
							semantic='h5'>
								Name: {CLIENT.signedInName.length < nameCharLimit ? CLIENT.signedInName : CLIENT.signedInName.split('').filter((ch, i)=> i < nameCharLimit).concat(['...']).join('')}
						</Heading>
					</Element>
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