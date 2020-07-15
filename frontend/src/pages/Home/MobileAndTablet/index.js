import React from 'react'

import { device } from '../../../utils/responsiveBreakpoints'
import { Element } from '../../../components/Element'

import ClientCard from '../../../components/ClientCard'

const defaultStyle = () => {
	return `
	
		margin: 3%;

		${device.Desktop}{
			display: none;
		}
		${device.DesktopHD}{
			display: none;
		}
	`
}

const MobileAndTablet = ({...props}) => {
	return (
		<Element
			css={defaultStyle()}
			{...props}>
				<ClientCard/>
		</Element>
	)
}

export default MobileAndTablet