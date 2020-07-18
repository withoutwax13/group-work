import React from 'react'

import { device } from '../../../utils/responsiveBreakpoints'
import { Element } from '../../../components/Element'

import ClientCard from '../../../components/ClientCard'
import ChatRoom from '../../../components/ChatRoom'
import ClientGroupList from '../../../components/ClientGroupList'

const defaultStyle = () => {
	return `
		margin: 0;
		padding: 15px 2% 15px 2%;
		height: calc(100% - 30px);

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
		grid-template-areas: 
			"client-card . left . right"
	`
}

const DesktopAndBeyond = ({...props}) => {
	return (
		<React.Fragment>
			<Element
				css={defaultStyle()}
				{...props}>
					<ClientCard customStyle={`grid-area: client-card; max-height: 160px;`}/>
					<ChatRoom customStyle={`grid-area: left;`}/>
					<ClientGroupList customStyle={`grid-area: right;`}/>
			</Element>
		</React.Fragment>
	)
}

export default DesktopAndBeyond