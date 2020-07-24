import React from 'react'
import { connect } from 'react-redux'

import { Element } from '../Element'

import Avatar from '../Avatar'

const defaultStyle = () => {
	return `
		width: 30px; height: 30px; background-color: black; margin-left: 3px;
	`
}

const ClientCard = (props) => {
	const { CLIENT } = props
	const renderClientImage = () => {
		if(CLIENT){
			return (
				<Avatar 
					imageUrl={CLIENT.signedInImageUrl} 
					width='30px' 
					height='30px'
					customStyle='margin: 0; padding: 0;'/>
			)
		}
	}
	return (
		<Element 
			css={defaultStyle()}>
				{renderClientImage()}
		</Element>
	)
}

const mapStateToProps = ({CLIENT_LOG_DATA}) => {
	return {
		CLIENT: CLIENT_LOG_DATA
	}
}

export default connect(mapStateToProps)(ClientCard)