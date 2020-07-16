import React from 'react'

import { device } from '../../../utils/responsiveBreakpoints'
import { Element } from '../../../components/Element'

import ClientCard from '../../../components/ClientCard'
import ChatRoom from '../../../components/ChatRoom'
import ChatRoomList from '../../../components/ChatRoomList'
import ClientGroupList from '../../../components/ClientGroupList'

const defaultStyle = () => {
	return `
		
		margin: 3%;
		height: calc(100% - 100px);

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
		grid-template-columns: 25% 2% 46% 2% 25%;
		grid-template-rows: 30% 2% 68%;
		grid-template-areas: 
			"first-top . second . third"
			". . second . third"
			"first-bottom . second . third";
	`
}

const DesktopAndBeyond = ({...props}) => {
	return (
		<Element
			css={defaultStyle()}
			{...props}>
				<ClientCard customStyle={`grid-area: first-top;`}/>
				<ClientGroupList customStyle={`grid-area: first-bottom;`}/>
				<ChatRoom customStyle={`grid-area: second;`}/>
				<ChatRoomList customStyle={`grid-area: third;`}/>
		</Element>
	)
}

export default DesktopAndBeyond