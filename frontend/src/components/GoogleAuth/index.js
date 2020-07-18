import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'

import { logClient, unlogClient } from '../../modules/actions'

const GoogleAuth = ({...props}) => {
    const { IS_CLIENT_LOGGED, unlogClient, logClient, WrappedComponent, eventHandler } = props
    let auth = useRef()

	useEffect(()=>{
		window.gapi.load('client:auth2', ()=>{
			window.gapi.client.init({
				clientId: '664701191461-7ch1hbjrg0n9rnvhtrl9pft8b1mc3d66.apps.googleusercontent.com',
				scope: 'email'
			}).then(()=>{
				auth.current = window.gapi.auth2.getAuthInstance()
				onAuthChange(auth.current.isSignedIn.get())
				auth.current.isSignedIn.listen(onAuthChange)
			})
		})
	})

	const onAuthChange = (isSignedIn) => {
		if (isSignedIn){
			logClient(
								auth.current.currentUser.get().getBasicProfile().getId(), 
								auth.current.currentUser.get().getBasicProfile().getName(), 
								auth.current.currentUser.get().getBasicProfile().getEmail(), 
								auth.current.currentUser.get().getBasicProfile().getImageUrl()
						)
		} else {
			unlogClient()
		}
	}

	const onSignInClick = () => {
		auth.current.signIn()
	}

	const onSignOutClick = () => {
		auth.current.signOut()
    }
    if (IS_CLIENT_LOGGED){
        eventHandler.current = onSignOutClick
    } else {
        eventHandler.current = onSignInClick
    }
    return <WrappedComponent/>
}

const mapStateToProps = ({CLIENT_LOG_DATA}) => {
	return {
		IS_CLIENT_LOGGED: CLIENT_LOG_DATA.isSignedIn
	}
}

export default connect(mapStateToProps, { unlogClient, logClient })(GoogleAuth)