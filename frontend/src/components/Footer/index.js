import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Element } from '../Element'
import Heading from '../Heading'

const defaultStyle = `
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 35px;
	background-color: transparent;
`

const Footer = ({...props})=>{
	const { customStyle, IS_CLIENT_LOGGED, ...rest } = props
	if (IS_CLIENT_LOGGED) 
		return (
			<Element
				css={customStyle ? defaultStyle + customStyle : defaultStyle}
				{...rest}>
					<Heading semantic='p'>(c)group-work. All rights reserved.</Heading>
			</Element>
		)
	else return null
}

Footer.propTypes = {
	IS_CLIENT_LOGGED: PropTypes.bool
}

const mapStateToProps = ({CLIENT_LOG_DATA}) => {
	return {
		IS_CLIENT_LOGGED: CLIENT_LOG_DATA.isSignedIn
	}
}

export default connect(mapStateToProps)(Footer)