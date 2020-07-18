import React, { useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Element } from '../Element'
import Search from './Search'
import Navigation from '../Navigation'
import GoogleAuth from '../GoogleAuth'

const defaultStyle = `
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`

const Menu = ({...props}) => {

	const { IS_CLIENT_LOGGED, customStyle, ...rest } = props
	const onClickHandler = useRef()
	
	if (IS_CLIENT_LOGGED){
		return (
			<Element
				css={customStyle ? defaultStyle + customStyle : defaultStyle}
				{...rest}>
					<Search/>
					<GoogleAuth
							WrappedComponent={()=><Navigation 
								semantic='link' 
								to='/'
								onClick={onClickHandler.current}
								customStyle='border-radius: 5px; background-color: white; color: black; &:hover{ background-color: black; color: white; }'>
									LOGOUT
							</Navigation>}
							eventHandler={onClickHandler}
					/>
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
					<GoogleAuth
							WrappedComponent={()=><Navigation 
								semantic='link' 
								to='/'
								onClick={onClickHandler.current}
								customStyle='border-radius: 5px; background-color: white; color: black; &:hover{ background-color: black; color: white; }'>
									LOGIN
							</Navigation>}
							eventHandler={onClickHandler}
					/>
				)}/>
			</Element>
		)	
	}
}

Menu.propTypes = {
	IS_CLIENT_LOGGED: PropTypes.bool
}

const mapStateToProps = ({CLIENT_LOG_DATA}) => {
	return {
		IS_CLIENT_LOGGED: CLIENT_LOG_DATA.isSignedIn
	}
}

export default connect(mapStateToProps)(Menu)