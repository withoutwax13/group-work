import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { device } from '../../utils/responsiveBreakpoints'

import { Element } from '../Element'
import Search from './Search'
import Navigation from '../Navigation'

const defaultStyle = `
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`

const Menu = ({...props}) => {
	if (props.isClientLogged){
		return (
			<Element
				css={props.customStyle ? defaultStyle + props.customStyle : defaultStyle}
				{...props}>
					<Search/>
					<Navigation link to='/' customStyle='background-color: #dedad7; color: black;'>LOGOUT</Navigation>
			</Element>
		)
	}
	else {
		return (
			<Element
				css={props.customStyle ? defaultStyle + props.customStyle : defaultStyle}
				{...props}>
					<Navigation href='https://github.com/withoutwax13/group-work'>about</Navigation>
					<Navigation link to='/sign-in' customStyle='background-color: #dedad7; color: black;'>LOGIN</Navigation>
			</Element>
		)	
	}
}

const mapStateToProps = ({IS_CLIENT_LOGGED}) => {
	return {
		isClientLogged: IS_CLIENT_LOGGED
	}
}

export default connect(mapStateToProps)(Menu)