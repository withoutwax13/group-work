import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { logClient, unlogClient } from '../../modules/actions'

import { Element } from '../Element'
import Search from './Search'
import Navigation from '../Navigation'
import Button from '../Button'

const defaultStyle = `
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`

const Menu = ({...props}) => {
	if (props.IS_CLIENT_LOGGED){
		return (
			<Element
				css={props.customStyle ? defaultStyle + props.customStyle : defaultStyle}
				{...props}>
					<Search/>
					<Navigation 
						link to='/'
						onClick={()=>props.unlogClient()} 
						customStyle='border-radius: 5px; background-color: #dedad7; color: black; &:hover{ background-color: black; color: #dedad7; }'>
							LOGOUT
					</Navigation>
			</Element>
		)
	}
	else {
		return (
			<Element
				css={props.customStyle ? defaultStyle + props.customStyle : defaultStyle}
				{...props}>
					<Navigation 
						href='https://github.com/withoutwax13/group-work'>
							about
					</Navigation>
					<Navigation 
						link to='/'
						onClick={()=>props.logClient()} 
						customStyle='border-radius: 5px; background-color: #dedad7; color: black; &:hover{ background-color: black; color: #dedad7; }'>
							LOGIN
					</Navigation>
			</Element>
		)	
	}
}

Menu.propTypes = {
	IS_CLIENT_LOGGED: PropTypes.bool.isRequired,
	unlogClient: PropTypes.func.isRequired,
	logClient: PropTypes.func.isRequired
}

const mapStateToProps = ({IS_CLIENT_LOGGED}) => {
	return {
		IS_CLIENT_LOGGED
	}
}

export default connect(mapStateToProps, { unlogClient, logClient })(Menu)