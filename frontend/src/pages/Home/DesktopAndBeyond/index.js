import React from 'react'

import { device } from '../../../utils/responsiveBreakpoints'
import { Element } from '../../../components/Element'

import ChatRoom from '../../../components/ChatRoom'
import ClientGroupList from '../../../components/ClientGroupList'

const defaultStyle = () => {
	return `
		${device.MobilePortrait}{
			display: none;
		}
		${device.MobileLandscape}{
			display: none;
		}
		${device.Tablet}{
			display: none;
		}
		${device.TabletHD}{
			display: none;
		}
		display: grid;
		grid-template-columns: 1% 35% 1% 62% 1%;
		grid-template-rows: 1% 98% 1%;
		grid-template-areas: 
			". . . . ."
			". groupList . chatRoom ."
			". . . . .";
	`
}

const DesktopAndBeyond = ({...props}) => {
	return (
		<React.Fragment>
			<Element
				css={defaultStyle()}
				{...props}>
					<ClientGroupList customStyle='grid-area: groupList;'/>
					<ChatRoom customStyle='grid-area: chatRoom;'/>
			</Element>
		</React.Fragment>
	)
}

export default DesktopAndBeyond