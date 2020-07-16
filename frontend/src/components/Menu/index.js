import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { logClient, unlogClient } from '../../modules/actions'

import { Element } from '../Element'
import Search from './Search'
import Navigation from '../Navigation'

const defaultStyle = `
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`

const Menu = ({...props}) => {

	const { IS_CLIENT_LOGGED, logClient, unlogClient, customStyle, ...rest } = props
	let auth = {}

	useEffect(()=>{
		window.gapi.load('client:auth2', ()=>{
			window.gapi.client.init({
				clientId: '664701191461-7ch1hbjrg0n9rnvhtrl9pft8b1mc3d66.apps.googleusercontent.com',
				scope: 'email'
			}).then(()=>{
				auth = window.gapi.auth2.getAuthInstance()
				onAuthChange(auth.isSignedIn.get())
				auth.isSignedIn.listen(onAuthChange)
			})
		})
	})

	const onAuthChange = (isSignedIn) => {
		if (isSignedIn){
			logClient(
								auth.currentUser.get().getBasicProfile().getId(), 
								auth.currentUser.get().getBasicProfile().getName(), 
								auth.currentUser.get().getBasicProfile().getEmail(), 
								auth.currentUser.get().getBasicProfile().getImageUrl()
						)
		} else {
			unlogClient()
		}
	}

	const onSignInClick = () => {
		auth.signIn()
	}

	const onSignOutClick = () => {
		auth.signOut()
	}
	
	if (IS_CLIENT_LOGGED){
		return (
			<Element
				css={customStyle ? defaultStyle + customStyle : defaultStyle}
				{...rest}>
					<Search/>
					<Navigation 
						semantic='link' 
						to='/'
						onClick={onSignOutClick} 
						customStyle='border-radius: 5px; background-color: #dedad7; color: black; &:hover{ background-color: black; color: #dedad7; }'>
							LOGOUT
					</Navigation>
			</Element>
		)
	}
	else {
		return (
			<Element
				css={customStyle ? defaultStyle + customStyle : defaultStyle}
				{...rest}>
					<Navigation
						semantic='a' 
						href='https://github.com/withoutwax13/group-work'>
							about
					</Navigation>
					<Navigation 
						semantic='link' 
						to='/'
						onClick={onSignInClick} 
						customStyle='border-radius: 5px; background-color: #dedad7; color: black; &:hover{ background-color: black; color: #dedad7; }'>
							LOGIN
					</Navigation>
			</Element>
		)	
	}
}

Menu.propTypes = {
	IS_CLIENT_LOGGED: PropTypes.bool,
	unlogClient: PropTypes.func.isRequired,
	logClient: PropTypes.func.isRequired
}

const mapStateToProps = ({CLIENT_LOG_DATA}) => {
	return {
		IS_CLIENT_LOGGED: CLIENT_LOG_DATA.isSignedIn
	}
}

export default connect(mapStateToProps, { unlogClient, logClient })(Menu)