import React from 'react'

import { device } from '../../../utils/responsiveBreakpoints'
import { Element } from '../../../components/Element'

import Tab from './Tab'

import ClientCard from '../../../components/ClientCard'

const defaultStyle = () => {
	return `
	
		margin: 0;
		padding: 5px 1% 5px 1%;
		height: calc(100% - 20px);

		${device.Desktop}{
			display: none;
		}
		${device.DesktopHD}{
			display: none;
		}

		display: grid;
		grid-template-rows: 22% 2% 74% 2%;
		grid-template-areas: 
			"top"
			"."
			"bottom"
			".";
	`
}

const MobileAndTablet = ({...props}) => {
	return (
		<Element
			css={defaultStyle()}
			{...props}>
				<ClientCard customStyle={`grid-area: top; max-height: 160px;`}/>
				<Tab customStyle={`grid-area: bottom; min-height: 400px;`}/>
		</Element>
	)
}

export default MobileAndTablet