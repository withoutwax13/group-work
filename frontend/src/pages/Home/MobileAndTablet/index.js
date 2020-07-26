import React from 'react'
import { connect } from 'react-redux'

import { device } from '../../../utils/responsiveBreakpoints'
import { Element } from '../../../components/Element'

import ChatRoom from '../../../components/ChatRoom'
import ClientGroupList from '../../../components/ClientGroupList'

const defaultStyle = () => {
	return `
		width: 100%;
		${device.Desktop}{
			display: none;
		}
		${device.DesktopHD}{
			display: none;
		}
		margin-top: 1%;
	`
}

const MobileAndTablet = ({...props}) => {
	const { tabStatus } = props
	const renderElements = () => {
		if (tabStatus){
			return <ClientGroupList/>
		}
		return <ChatRoom/>
	}
	return (
		<Element
			css={defaultStyle()}
			{...props}>
				{
					// Tab here interchange the render of ChatRoom and ClientGroupList components
				}
				{renderElements()}
		</Element>
	)
}

const mapStateToProps = ({MOBILE_TAB_STATUS}) => {
	return {
		tabStatus: MOBILE_TAB_STATUS
	}
}

export default connect(mapStateToProps)(MobileAndTablet)