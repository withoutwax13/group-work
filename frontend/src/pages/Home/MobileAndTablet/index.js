import React from 'react'

import { device } from '../../../utils/responsiveBreakpoints'
import { Element } from '../../../components/Element'

import Tab from './Tab'

import ClientCard from '../../../components/ClientCard'

const defaultStyle = () => {
	return `
	
		margin: 2% 4%;

		${device.Desktop}{
			display: none;
		}
		${device.DesktopHD}{
			display: none;
		}

		display: grid;
		grid-template-rows: 22% 2% 76%;
		grid-template-areas: 
			"top"
			"."
			"bottom";
	`
}

const MobileAndTablet = ({...props}) => {
	return (
		<Element
			css={defaultStyle()}
			{...props}>
				<ClientCard customStyle={`grid-area: top;`}/>
				<Tab customStyle={`grid-area: bottom;`}/>
		</Element>
	)
}

export default MobileAndTablet